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
  console.log("//..Now I'm ready! - Bot running");
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

function messageFather (message) {
  message.channel.send("Yes and I am your father");
}

function getCode(message) {
  const max = 9999;
  const min = 1000;
  const code = Math.floor(Math.random() * (max - min)) + min;
  message.channel.send(code.toString());
}


// -----------------------------------

// commands - match incoming text with functions:
let commands = new Map();
commands.set("random", randomNumber);
commands.set("random2", randomNumber2);
commands.set("father", messageFather);

commands.set("code", getCode);

// -----------------------------------
// process messages:
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


/*

client.on("message", (message) => {
  if (message.content === "Are you there?") {
    // send back "Pong." to the channel the message was sent in
    message.channel.send("Yes and I am your father");
  }
});

*/
