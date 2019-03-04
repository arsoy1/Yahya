const settings = require("./config.json"); 
const Discord = require('discord.js');
const initcmd = settings.initcmd;
const id = settings.id;
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Hi ${client.user.tag}`);
  console.log('')
  console.log(`i Have  [ " ${client.guilds.size} " ]`);
});

const developers = id
const adminprefix = initcmd;
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'play')) {
    client.user.setGame(argresult);
      message.channel.send("**:white_check_mark: | The Playing Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'watch')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send("**:white_check_mark: | The Watching Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'listen')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send("**:white_check_mark: | The Listening Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'stream')) {
    client.user.setGame(argresult, "https://www.twitch.tv/TheLegend_245");
      message.channel.send("**:white_check_mark: | The Streaming Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } 
  
});

 


client.login(settings.token);

