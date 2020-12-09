console.log('//..Checking setup..');

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

console.log('//..Connecting Bot, please wait..');

// when app is ready for use:
client.once("ready", () => {
  console.log("//..Now I'm ready! - Bot running");
});

client.on("message", (message) => {
  if (message.content === "!Are you there?") {
    // send back "Pong." to the channel the message was sent in
    message.channel.send("Yes and I am your father");
  }
});

// Discord Bot token access via dotenv const:
client.login(token);
