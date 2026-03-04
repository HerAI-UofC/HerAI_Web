// Uses AppSync and SES Lambda function to send data from contact form to club email address.

const AWS = require("aws-sdk");

const ses = new AWS.SES({ region: process.env.AWS_REGION || process.env.REGION });
const TO = process.env.TO_EMAIL;
const FROM = process.env.FROM_EMAIL;

exports.handler = async (event) => {
    console.log("Received event from AppSync:", JSON.stringify(event));

    const {
        firstname: firstName,
        lastname: lastName,
        email,
        number: phone,
        message,
    } = event;

    const subject = `New Contact: ${firstName} ${lastName}`;
    const bodyText =
        `New contact submission

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "N/A"}

Message:
${message}`;

    console.log("Sending email via SES to:", TO);

    await ses
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

    console.log("Email sent successfully");

    return { status: "Email sent" };
};