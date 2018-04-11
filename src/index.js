"use strict";

module.exports.handler = (event, context, callback) => {
  if (event) console.log(JSON.stringify(event));
  const response = {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: "hello"
    })
  };

  callback(null, response);
};
