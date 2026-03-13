const AWS = require("aws-sdk");

const cognito = new AWS.CognitoIdentityServiceProvider();
const s3 = new AWS.S3();

const response = (statusCode, body) => ({
    statusCode,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,DELETE",
    },
    body: JSON.stringify(body),
});

const deleteS3Prefix = async (bucket, prefix) => {
    let continuationToken;

    do {
        const listed = await s3.listObjectsV2({
            Bucket: bucket,
            Prefix: prefix,
            ContinuationToken: continuationToken,
        }).promise();

        const contents = listed.Contents || [];

        if (contents.length > 0) {
            await s3.deleteObjects({
                Bucket: bucket,
                Delete: {
                    Objects: contents.map((obj) => ({ Key: obj.Key })),
                    Quiet: true,
                },
            }).promise();
        }

        continuationToken = listed.IsTruncated
            ? listed.NextContinuationToken
            : undefined;
    } while (continuationToken);
};

exports.handler = async (event) => {
    try {
        const method =
            event?.httpMethod ||
            event?.requestContext?.http?.method;

        if (method === "OPTIONS") {
            return response(200, {});
        }

        const body = event?.body ? JSON.parse(event.body) : {};
        const sub = body?.sub;
        const username = body?.username;

        if (!sub || !username) {
            return response(400, { message: "Missing sub or username" });
        }

        const userPoolId = process.env.USER_POOL_ID;
        const bucket = process.env.S3_BUCKET;

        await deleteS3Prefix(bucket, `public/avatars/${sub}/`);
        await deleteS3Prefix(bucket, `public/covers/${sub}/`);

        await cognito.adminDeleteUser({
            UserPoolId: userPoolId,
            Username: username,
        }).promise();

        return response(200, { ok: true });
    } catch (err) {
        console.log("DELETE ACCOUNT ERROR:", err);
        return response(500, { error: err.message });
    }
};