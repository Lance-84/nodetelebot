require("dotenv").config()
const TeleBot = require("telebot");
const fs = require("graceful-fs");

const bot = new TeleBot({token: process.env.BOT_KEY})

fs.appendFileSync("testFile.csv","order_no, fabric_type, quantity, price\n");

bot.on('text', (msg) => {
    const [order,fabric,qty,price] = msg.text.split(",");
    fs.appendFileSync("testFile.csv",`${order}, ${fabric}, ${qty}, ${price}\n`);
    console.log("input saved")
});
 
bot.start();