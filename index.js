const { Telegraf } = require('telegraf');
// const { message } = require('telegraf/filters');

/* 
    How to get the secret bot token for creating a telegram bot:- 

    -> Open telegram and search for BotFather .
        -> do '/start'
        -> to create a new bot type '/newbot' and press enter
        -> then enter the name for your bot, once accepted the name... you will get a "Done, congratulations" msg

        link for this newly created bot is :- "https://core.telegram.org/bots/api"  

        this botfather will also give you the bot token in the confrimation message. Save that bot token... also secure it well and safe gaurd it. 

        -> use the cmd 'bot.launch()' to start ypur bot.
        -> your node server must always be running to serve the requests on your telegram bot. 


*/


const bot = new Telegraf('6600831116:AAEfhM7Ud_DITYs_rNL8qM_ip2Dcd6JIbkI') 

bot.start((ctx) => ctx.reply('How you doing Coding Geek')); 
// bot.on(message('sticker'), (ctx) => ctx.reply('💖'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));

bot.command('whomadethis', (ctx) => ctx.reply('dev_en -> Deven'));

bot.on('sticker', (ctx) => ctx.reply('❤️')); 


bot.launch(); 