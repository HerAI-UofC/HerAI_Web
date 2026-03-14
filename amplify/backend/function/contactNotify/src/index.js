// Uses AppSync and SES Lambda function to send data from contact form to club email address.

const AWS = require("aws-sdk");

const ses = new AWS.SES({ region: process.env.AWS_REGION || process.env.REGION });
const TO = process.env.TO_EMAIL;
const FROM = process.env.FROM_EMAIL;

exports.handler = async (event) => {
    console.log("Received event from AppSync:", JSON.stringify(event));

    const {
        firstName,
        lastName,
        email,
        phone,
        message,
    } = event;

    const subject = `New Contact Form Submission: ${firstName} ${lastName}`;
    const bodyText =
        `New contact form submission from the HerAI website:

        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone || "N/A"}

        Message:
        ${message}`;

    console.log("Sending email via SES to:", TO);

    try {
        const result = await ses
        .sendEmail({
            Source: FROM,
            Destination: { ToAddresses: [TO] },
            ReplyToAddresses: email ? [email] : [],
            Message: {
                Subject: { Data: subject },
                Body: { Text: { Data: bodyText } },
            },
        })
        .promise();

        console.log("SES result:", result);
        console.log("Email sent successfully");

        // GraphQL expects a Candidate object to be returned (placeholder since we moved to Lambda and are no longer using DynamoDB)
        return { 
            id: Date.now().toString(),
            firstname: firstName,
            lastname: lastName,
            email: email,
            number: phone,
            message: message,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

    }
    catch (error) {
        console.error("Ran into an SES error:", error);
        throw error;
    }
};