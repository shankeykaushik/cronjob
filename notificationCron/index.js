const cron = require('node-cron');
const express = require('express');
app = express();
const request = require("request");
cron.schedule("*/5 * * * * *", () => {
  console.log("running a task every 5 Second");
// cron.schedule("0 9 * * *", () => {
  // console.log("running a task every day at 9:00 AM");
  
    request.post(
      {
        uri: "Method Url where it has",
        headers: {
          "content-type": "application/json",
        }
      },
      function (err, data) {
        if (err) {
          return "Error";
        }
        if (data) {
          console.log("Return from sails =>", data.body);
          return "Cron Run";
        }
      }
    );
  });