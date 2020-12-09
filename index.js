console.log("//..Checking code..checking setup..");
// dotenv setup:
require("dotenv").config();
// console.log(require('dotenv').config())
const token = process.env.TOKEN;
// console.log("the token i get:", token);
// -----------------------------------
// require discord.js:
const Discord = require("discord.js");
// create client:
const client = new Discord.Client();

console.log("//..Connecting Bot, please wait..");

// when app is ready for use:
client.once("ready", () => {
  console.log("//..Now I'm ready! - Bot running 🤖");
});
// Discord Bot token access via dotenv const:
client.login(token);

// -----------------------------------
// functions:
function randomNumber(message) {
  const number = Math.random();
  message.channel.send(number.toString());
}

function randomNumber2(message) {
  const number = Math.floor(Math.random());
  message.channel.send(number.toString());
}

function messageFather(message) {
  message.channel.send("Yes and I am your father");
}

function getCode(message) {
  const max = 9999;
  const min = 1000;
  const code = Math.floor(Math.random() * (max - min)) + min;
  message.channel.send(code.toString());
}

function getDate(message) {
  const date = new Date();
  message.channel.send(date.toString());
}

// function help (message) {
//   message.channel.send("```Available Commands:\n-help <Help list>\nping <test>\nweather <US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name> (e.g: weather Athens)\n```");
// }

// -----------------------------------
// commands - match incoming text with functions:
let commands = new Map();
commands.set("random", randomNumber);
commands.set("random2", randomNumber2);
commands.set("father", messageFather);
commands.set("code", getCode);
commands.set("date", getDate);


// -----------------------------------
// process listening and acting to incoming messages:
client.on("message", (message) => {
  if (message.content[0] === "?") {
    const command = message.content.split(" ")[0].substr(1);
    if (commands.has(command)) {
      // Check map what command exists
      commands.get(command)(message);
      // Runs command
    }
  }
});




// -----------------------------------
/*

TODO:

- add --help reply
- add if no word matches
- cleanup index file and put function and commands in their own files.

*/
