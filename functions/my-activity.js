const axios = require("axios");

exports.handler = async function (context, event, callback) {
  console.log("Incoming event", event);
  const from = event.From || "";
  const response = new Twilio.Response();

  const ax = axios.create({
    baseURL: context.AIRTABLE_URL,
    headers: { Authorization: "Bearer " + context.AIRTABLE_APIKEY },
  });

  try {
    const qry = encodeURIComponent("{Phone} = '" + from + "'");
    const uri = context.AIRTABLE_BASE + "?filterByFormula=" + qry;
    console.log("Airtable URI", uri);
    const air_response = await ax.get(uri);
    let found = false;

    const records = air_response.data.records;
    console.log("Looking for", from);
    console.log("Airtable records", records);

    if (records && records.length > 0) found = true;

    if (found) {
      callback(null, records[0].fields);
    } else {
      response.setStatusCode(404);
      callback(null, response);
    }
  } catch (err) {
    response.setStatusCode(500);
    callback(err, response);
  }
};
