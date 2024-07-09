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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_14_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU5LFxuICAgICAgICA3MixcbiAgICAgICAgNTUsXG4gICAgICAgIDkzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDc5LFxuICAgICAgICA3LFxuICAgICAgICA4OSxcbiAgICAgICAgNDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDEsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY5LFxuICAgICAgICAwLFxuICAgICAgICAzMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTksXG4gICAgICAgIDk0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEsXG4gICAgICAgIDk2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDAsXG4gICAgICAgIDE4LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDg3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NixcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMxLFxuICAgICAgICA0NixcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMixcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjksXG4gICAgICAgIDE0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHRkd3T3I4ZWpoTlBKMTB2cE85K1VyNURjblBNS0tJVWZOdjNraGZoOC9ZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTMzMTIxODg1N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMEMzOEJCMDg5MDk0NzFBQkIxQURFQTMyQkY4MzQ5NDRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNDI2NDg4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5MzMxMjE4ODU3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGOTM4N0RGNTEwREUzMTQ5Qzc4RUMzQkQzMTVEMDc5N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA0MjY0ODhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTkzMzEyMTg4NTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjgzQTE1QkMxNTlCOTg1REM2NTMyOTI2MDk1QkZENThFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDQyNjQ5MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTMzMTIxODg1N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiN0IxMEExMzIxMERFRjAyODUwQzkxRTMyODk0NTJFMTRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNDI2NDkxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk1zRXBqS3lNUTgtWlpiMWpLaTZ2WGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGM5NjZiYjktYTY0YS00YWMzLTg2MmEtOGJhNmVjNmQxZWE4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MCxcbiAgICAgIDYxLFxuICAgICAgNDIsXG4gICAgICA1OCxcbiAgICAgIDY5LFxuICAgICAgMjEzLFxuICAgICAgMTg1LFxuICAgICAgODQsXG4gICAgICA3NixcbiAgICAgIDI0MyxcbiAgICAgIDU4LFxuICAgICAgNSxcbiAgICAgIDYyLFxuICAgICAgMTIsXG4gICAgICA5NSxcbiAgICAgIDIxNixcbiAgICAgIDIyNyxcbiAgICAgIDgyLFxuICAgICAgMTA0LFxuICAgICAgMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDUsXG4gICAgICAxMDUsXG4gICAgICA1NSxcbiAgICAgIDE1NixcbiAgICAgIDIwLFxuICAgICAgMTMwLFxuICAgICAgMTE0LFxuICAgICAgMTAwLFxuICAgICAgMTE5LFxuICAgICAgMTQ3LFxuICAgICAgMTExLFxuICAgICAgMjE3LFxuICAgICAgMTEzLFxuICAgICAgMjIxLFxuICAgICAgMTAsXG4gICAgICA1MCxcbiAgICAgIDEyNCxcbiAgICAgIDIxLFxuICAgICAgMjQ0LFxuICAgICAgOTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMkFGOUxGUVlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxOTMzMTIxODg1NzoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTE2NTEwMDgxMTU5MjIxOjExQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkFiaGlydXAgQmhhdHRhY2hhcmplZVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BDNHQ4WUhFUEsvcnJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWG9oL21uMHdXSHNFMStnV1kraU5EcE9sZWp5Z2h2WmMwKythdjI2RmtSYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ5YUdnMUtQelZDdjFxaXRvWWZKQUJ5bFBtQlprRkNRam1jWEZLbTBpKzhPUEllZ0xGZ0EwVlBrU0V4WThPeUh0RHlvTGV5T1hQU0gvSFNKK2c3MVZBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIRy90elRvR0Y1TUZLKzVacGhQU0VJbkdoOGRIWTVhdEpwTGNXTjJnUDNDbGppKy9kbE52YkQ0ampKd3VwUURwVmRHN1ZVUUtJZnN0b3dSOUxTQ2Vqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTkzMzEyMTg4NTc6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDI2NDg1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTjhKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOOEouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJIeFJNLzhJcnU5TmI4dFZaaWc1dWJnelhyc2xia3JlNXdlbVVhbVoxOXEwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMjY3NTcyMzIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDQyNjQ4ODA0NVwifSIKfQ=="  // PUT your SESSION_ID 


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
