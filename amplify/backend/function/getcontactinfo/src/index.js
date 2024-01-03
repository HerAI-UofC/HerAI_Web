/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const aws = require('aws-sdk')
const ses = new aws.SES()

exports.handler = async (event) => {
  console.log("running this event")
  for (const streamedItem of event.Records) {
    if(streamedItem.eventName === 'INSERT') {
      const candidateFirstName = streamedItem.dynamodb.NewImage.firstname.S
      const candidateLastName = streamedItem.dynamodb.NewImage.lastname.S
      const candidatePhone = streamedItem.dynamodb.NewImage.phone.S
      const candidateEmail = streamedItem.dynamodb.NewImage.email.S
      const candidateMessage = streamedItem.dynamodb.NewImage.message.S

      await ses.sendEmail({
        Destination: {
          ToAddresses: ['connect.herai@gmail.com'],
        },
        Source: "connect.herai@gmail.com",
        Message: {
          Subject: {Data: 'Candidate Submission'},
          Body: {
            Text: {Data: `My name is ${candidateFirstName}. You can reach me at ${candidateEmail}.`},
          },
        },
      })
      .promise()
    }
  }
  return {status: 'done'}
};