const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.handler = function (context, event, callback) {
  const response = new Twilio.Response();
  const default_response = { last_activity: "unknown" };
  console.log("Caller", event.From);

  prisma.customer
    .findFirst({
      where: {
        phone: event.From,
      },
    })
    .then((db_response) => {
      console.log(db_response);
      response.setBody(db_response);
      callback(null, response);
    })
    .catch((err) => {
      console.log("No record found");
      response.setStatusCode(404);
      callback(null, response);
    });
};
