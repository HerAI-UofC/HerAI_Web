/* Amplify Params - DO NOT EDIT
  ENV
  REGION
  TO_EMAIL
  FROM_EMAIL
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");

// Use the built-in v2 SDK (already available in Lambda)
const ses = new AWS.SES({ region: process.env.AWS_REGION || process.env.REGION });

const TO = process.env.TO_EMAIL;
const FROM = process.env.FROM_EMAIL;

exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    // Go through each DynamoDB stream record
    for (const record of event.Records || []) {
        console.log("eventName:", record.eventName);

        // Only send on INSERTs (new contact messages)
        if (record.eventName !== "INSERT") {
            continue;
        }

        const img = record.dynamodb.NewImage || {};

        // Helper to read string fields from the DynamoDB image
        const S = (key) => (img[key] && (img[key].S || "")) || "";

        const id = S("id");
        const firstName = S("firstName");
        const lastName = S("lastName");
        const email = S("email");
        const phone = S("phone");
        const message = S("message");
        const createdAt = S("createdAt");

        const subject = `New Contact: ${firstName} ${lastName}`.trim();

        const bodyText =
            `New contact submission

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "—"}

Message:
${message}

Submitted: ${createdAt || "—"}
ID: ${id}`;

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

        console.log("Email sent for contact id:", id);
    }

    return "Successfully processed DynamoDB records";
};
