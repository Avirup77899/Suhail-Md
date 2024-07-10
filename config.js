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
global.caption = process.env.CAPTION || global.caption || "ʙᴏᴛ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀᴠɪʀᴜᴘ-ᴍᴅ" 


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_45_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDUwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMixcbiAgICAgICAgMjM4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQwLFxuICAgICAgICA2NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAzMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNixcbiAgICAgICAgMTAxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjI4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA0LFxuICAgICAgICA5MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMyxcbiAgICAgICAgMjA4LFxuICAgICAgICA0MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDcwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICA0MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQzLFxuICAgICAgICA0NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDM0LFxuICAgICAgICA0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM5LFxuICAgICAgICA4NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDYwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMixcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODQsXG4gICAgICAgIDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNyxcbiAgICAgICAgMjE4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjksXG4gICAgICAgIDI4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDksXG4gICAgICAgIDM3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDUsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDgzLFxuICBcImFkdlNlY3JldEtleVwiOiBcImJ4NGR1M3dwUWdQb0dvQkNtcnZCZW42dkJJZzJCeFlVMmdFeC9BT0xTa3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlpUTmd0MnZoUU82RE9xdmg1ZW1HQ2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjllNGMxYmEtYjRkMy00YzNkLTg4NzItOTRhNjZmZjBlODM2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OSxcbiAgICAgIDIxOCxcbiAgICAgIDMyLFxuICAgICAgMTk5LFxuICAgICAgODEsXG4gICAgICAyNDQsXG4gICAgICAxMjksXG4gICAgICA5LFxuICAgICAgNjAsXG4gICAgICA0MixcbiAgICAgIDE5NCxcbiAgICAgIDIwMCxcbiAgICAgIDEzOCxcbiAgICAgIDIyLFxuICAgICAgMSxcbiAgICAgIDIxNyxcbiAgICAgIDIzOSxcbiAgICAgIDIwNSxcbiAgICAgIDI3LFxuICAgICAgMTU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMsXG4gICAgICAxMTAsXG4gICAgICAxMDQsXG4gICAgICAzLFxuICAgICAgNTgsXG4gICAgICA4NyxcbiAgICAgIDUzLFxuICAgICAgODUsXG4gICAgICAxMCxcbiAgICAgIDEwNSxcbiAgICAgIDg4LFxuICAgICAgMTI3LFxuICAgICAgMTQ0LFxuICAgICAgMTYwLFxuICAgICAgMjAsXG4gICAgICA2NixcbiAgICAgIDE2NSxcbiAgICAgIDIzNCxcbiAgICAgIDIwMSxcbiAgICAgIDEyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFTkNRRExCR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE5MzMxMjE4ODU3OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTY1MTAwODExNTkyMjE6MTdAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J2QjPCdkKsuIPCdkIHwnZCh8J2QmvCdkK3wnZCt8J2QmvCdkJzwnZCh8J2QmvCdkKvwnZCj8J2QnvCdkJ4g4p2k77iPXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEc0dDhZSEVOL0p1N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYb2gvbW4wd1dIc0UxK2dXWStpTkRwT2xlanlnaHZaYzArK2F2MjZGa1JjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk5wUDJaVlBPUWw4cjc3QldnSnpoaTYvWEZqYUpodXFTZElOSWt3MW1RQUU5RURrTjB1bWRtelFHOGQyTkJ1b21EbWJWZEREcWhteVNKRC9OZVErSkJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImF0WGpVbTcwZnMzQnJ2U3h5OGFWeXM2Q0hESmFJSGZZOG5VbzBPSlFzdk43SWtmbzBtQUlHbkhtNkNCdkhOU3B5empkQlh0R1VyNDRvRElYWDVSWkNBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxOTMzMTIxODg1NzoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA2NDA3MzcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCb0dcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJvRy5qc29uIjogIntcImtleURhdGFcIjpcImNsTVRobGtwdkxpcDg5WlhFdEVNUk9HVEMvNWozaFNzdDlGcnlyVmxHOU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAyNjc1NzIzMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNjQwNzQwMjEyXCJ9Igp9"  // PUT your SESSION_ID 


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
