exports.handler = function (context, event, callback) {
  const from = "Kanga Bank";
  const to = event.From;
  console.log("Incoming event to send invite function", event);

  context
    .getTwilioClient()
    .messages.create({
      to: to,
      from: from,
      body: "Fast track today’s experience, just follow the link below to try our fast help experience https://kanga.link/AYd65",
    })
    .then((msg) => {
      callback(null, msg.sid);
    })
    .catch((err) => callback(err));
};

// exports.handler = function (context, event, callback) {
//   const from = "Kanga Bank";
//   const to = event.From;
//   console.log("Incoming event to send invite function", event);

//   context
//     .getTwilioClient()
//     .messages.create({
//       to: to,
//       from: from,
//       body: "Fast track today’s experience, just follow the link below to try our fast help experience https://kanga.link?id=asf80jfe",
//     })
//     .then((msg) => {
//       context
//         .getTwilioClient()
//         .messages.create({
//           to: to,
//           from: from,
//           body: "https://kanga.link?id=asf80jfe",
//         })
//         .then((msg) => {
//           callback(null, msg.sid);
//         })
//         .catch((err) => callback(err));
//     })
//     .catch((err) => callback(err));
// };
