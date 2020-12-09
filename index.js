console.log('Checking setup..');

// dotenv setup:
require("dotenv").config();
// console.log(require('dotenv').config())
const token = process.env.TOKEN;
// console.log("the token i get:", token);
// -----------------------------------

// require the discord.js module
const Discord = require("discord.js");

// create the Discord client:
const client = new Discord.Client();

console.log('Connecting Bot, please wait..');

// when app is ready - write out:
client.once("ready", () => {
  console.log("Now I'm ready!");
});

client.on("message", (message) => {
  if (message.content === "!Are you there?") {
    // send back "Pong." to the channel the message was sent in
    message.channel.send("Yes and I am your father");
  }
});
// Replace the value between the quotes with your token
client.login(token);
// client.login('your-token-goes-here');
