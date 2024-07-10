const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://wa.me/919331218857";
global.website=process.env.GURL || "https://wa.me/919331218857" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "sʀɪᴊᴀ ʙᴏᴛ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀᴠɪʀᴜᴘ-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919331218857";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_54_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTksXG4gICAgICAgIDc2LFxuICAgICAgICAzOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDMzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNyxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICAyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTksXG4gICAgICAgIDY4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE2LFxuICAgICAgICA0OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1LFxuICAgICAgICAxODcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxLFxuICAgICAgICA0NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODksXG4gICAgICAgIDkzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDkxLFxuICAgICAgICA4NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICA4MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgxLFxuICAgICAgICA2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgODAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDk5LFxuICAgICAgICA5NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgODYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg5LFxuICAgICAgICA1MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjksXG4gICAgICAgIDkwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTMwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAzNixcbiAgICAgICAgNixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOSxcbiAgICAgICAgMjUxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY2LFxuICAgICAgICAzMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI2LFxuICAgICAgICA5MSxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICAxMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAzLFxuICAgICAgICA5NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDkzLFxuICAgICAgICA2NixcbiAgICAgICAgMjYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA4NixcbiAgICAgICAgNDUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDg3LFxuICAgICAgICA2OSxcbiAgICAgICAgODEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImNSdTBNZTJqTzhJQlRsaUtFK1ZLcjFZeU9vWXZWdnhaMXJrSmhNWU1EVk09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5MTYzODQ1MzEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxODA1RjdCQTczNjE4RjkyMTU2QTE4RTY5NkFCRDNDRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA2MjMyNzVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTkxNjM4NDUzMTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkIxNzQwOTI2MTVGOEU2MDU4RkU3NjhDMjhGNEJGOEUzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDYyMzI3N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4NmduQkpCdlIydVI0eDR6dXZrWWtnXCIsXG4gIFwicGhvbmVJZFwiOiBcImEyNDk1OWQzLTAyNjQtNDgyNy05MWExLTIyMDM4OGRlOGQ2MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MyxcbiAgICAgIDEyLFxuICAgICAgMTA2LFxuICAgICAgMTM0LFxuICAgICAgMTU3LFxuICAgICAgMTksXG4gICAgICA0NCxcbiAgICAgIDk3LFxuICAgICAgMTgwLFxuICAgICAgMTQ4LFxuICAgICAgMjksXG4gICAgICAxNzksXG4gICAgICAxMjIsXG4gICAgICA2MixcbiAgICAgIDIyOSxcbiAgICAgIDQ1LFxuICAgICAgMjE5LFxuICAgICAgMTk2LFxuICAgICAgMjQxLFxuICAgICAgMjAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMixcbiAgICAgIDEwOSxcbiAgICAgIDEzNCxcbiAgICAgIDIzNyxcbiAgICAgIDEzOSxcbiAgICAgIDE1MSxcbiAgICAgIDIwLFxuICAgICAgMjIzLFxuICAgICAgMjAyLFxuICAgICAgMTQ5LFxuICAgICAgOTYsXG4gICAgICAxNjgsXG4gICAgICAxODEsXG4gICAgICA3OCxcbiAgICAgIDExNyxcbiAgICAgIDE4NCxcbiAgICAgIDExNSxcbiAgICAgIDI1MyxcbiAgICAgIDUsXG4gICAgICA2NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQOEQySDk5RlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE5MTYzODQ1MzEyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjU1NzU3NzM1MjUxOTc0OjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiRGFyayAtWERcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJWEk2OW9ERUtiQnVyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjJkb1dTaGYwdEZRejE4RVlwbW85NSthRXE1d1c5MVptS0UvV2owUzFKM1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwienFuQW8wZE9SQXpwV3hhZ2xjV3RlY3RRZzBaVGJXeWRibnZKc3ZqblphODJWcFJjTUhYaXdxN1l1cWJzUEtkVTE3bDRtL1hJTjVRdVhsdDJxRDZsQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZU1MQ1dNNHpvcTFJN1B4cXFKRkF6bzFrT2x6YmdRYitPUWZSM0VBTlhNMVloZ01LY3VYZHNZT3BzVmVBUU9CTDFLNTQ2UE1qRlErRmpneWk0Yi9OQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5MTYzODQ1MzEyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDYyMzI3MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1uVlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTW5WLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQW1sZU9vTWhiakwzMG50bEFUdk1sTmhwaDV5UXhYeFFKa0tPMERCN2UxOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5OTU4MTIzNTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDYyMzI3NTM1MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 sʀɪᴊᴀ ʙᴏᴛ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀᴠɪʀᴜᴘ 』```"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sʀɪᴊᴀ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "ᴀᴠɪʀᴜᴘ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
