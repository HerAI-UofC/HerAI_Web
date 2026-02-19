/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");
const ses = new SESClient({ region: "us-east-1" });

exports.handler = async (event) => {
    console.log("running this event");
    // for (const streamedItem of event.Records) {}
    //     if (streamedItem.eventName === "INSERT") {}
    //         const candidateFirstName =
    //             streamedItem.dynamodb.NewImage.firstname.S;
    //         const candidateLastName = streamedItem.dynamodb.NewImage.lastname.S;
    //         const candidatePhone = streamedItem.dynamodb.NewImage.phone.S;
    //         const candidateEmail = streamedItem.dynamodb.NewImage.email.S;
    //         const candidateMessage = streamedItem.dynamodb.NewImage.message.S;

    const params = {
        Destination: {
            ToAddresses: ["connect.herai@gmail.com"],
        },
        Source: "connect.herai@gmail.com",
        Message: {
            Subject: { Data: "Candidate Submission" },
            Body: {
                Text: {
                    Data: "Work",
                },
            },
        },
    };

    try {
        const data = await ses.send(new SendEmailCommand(params));
        console.log("SUCCESS", data);
    } catch {
        console.log("ERROR", error);
    }

    return { status: "done" };
};