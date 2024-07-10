//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "qadeerplayz@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Qadeer-Sam/WASI-MD-V2";
global.gurl = process.env.GURL || "https://www.instagram.com/itz_qadeerey7?igsh=NGkxeTMzdGthYThn";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/a2630572a234225a2959f.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "3584573983493";
global.owner = process.env.OWNER_NUMBER || "923147479898";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/a2630572a234225a2959f.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUptSlBiM3hLbG1zdXBRN3krampBc2ExalJVb2x1OEw2R1BqR1p1djFXaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVorUDRxV2hETUVtaTVjTHZ5cHJQZ1NUZmh4WTRlQS95cHBOWDR4cWlUbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSm5XNno3ekRQdTdSUlpUV3dSUVRKbG9OSUVaYWZZRUZJSFhxMmVzejNVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXajV1VE1lYUQzUFBDSjJubDhhaDBTRGJLS2ExYytNdFVkdkxpWUg1RUJvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJQY253bUoyYjhtcW5BZ2x6Y1YwaU41MjJQYTg1T1pPL0U5a1k2ejFzMVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVNMkRRSzBYM2JjeXNRSVQ4VUdsdEgvMDF0YW9qZDRqdHZ1UUI4VmFUVGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0x4NjJZRnpWeG1SWDVRNmpCYWxWMnhCNC9YTzFtYm1hb01DRThRK29GMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVBxT2dVMGx6UGl2ZWl2OE8vTXRKd3d6OEhxN3pINFNVN0dSL0xUdFhWbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhLSG00QytmcDVLSVRBR0llQW9mZzZta3ovcXlzWHpMaUpMU2Nrd1l2MjJXaW1HYm1zWlBXcTBlcmVWSGxXemh1Wk5VQUZseWdNWGF3UjdWQXMwS0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMxLCJhZHZTZWNyZXRLZXkiOiJsL0RsOUpoWGhjcXFaNWlmSFNuZW5oS3ErcUprZExCOElxMm8xV1ZkRDgwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjM1ODQ1NzM5ODM0OTNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMjBEQkE2QjVENDlDOTlDQjU0MTM3N0Q4MDhCQjNENjEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDU4NzkwMX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMzU4NDU3Mzk4MzQ5M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGQUU1RDFFRUQ0QUMzOTgyNTk4MDQxRDc2REVFNUJFNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwNTg3OTAxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJSMlRIWVVGVVNsQ1V3Q1FzYWNmM0dRIiwicGhvbmVJZCI6IjIyYWQzY2I2LTMyNzAtNDk3OS04NTkwLWZlZjFkMmY1NTBhMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyN2U3MStyd3ExZDZKcml0RTdobE42eWxkTWc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2RzbmlRYjBnbjdpVlNKem4rQzhXOXZQMkFzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjJIWUNXOFQyIiwibWUiOnsiaWQiOiIzNTg0NTczOTgzNDkzOjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoizrfPg9CyzrnRgs6x8J+Sl/CfkZHwn4+0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOTyt4L0FDRU9lc3VMUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ6dEFscTJDSnBJT0V6aVJlcEhTQnorL2V3TFpHVVRINlJ6N1pka1ZxcEdvPSIsImFjY291bnRTaWduYXR1cmUiOiJ1NWFJL2xsM3FmL1VVM3RwNE13cEREY052K1J4bFVib3JDQlZCNnNSanhma1pTaDg5VzR6cFFtdmxQNWJLQ3ZEQUcvVEZuVG1ETVNWS2k0alBtM2lCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiREI3ZjhRdFUzR2dTOStCOGxZbHMreEJpQ3RwTEM5bXpkTkdGZS9FSHRNbExUZGlrUkJVNlp5K0d2NHljZ216MjBncmdYcVA4YmRFNEJqRXFERzV0QUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIzNTg0NTczOTgzNDkzOjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYzdRSmF0Z2lhU0RoTTRrWHFSMGdjL3Yzc0MyUmxFeCtrYysyWFpGYXFScSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDU4Nzg5OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLSHYifQ==="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-ησвιтα-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "ησвιтα💗👑🏴",
  packname: process.env.PACK_NAME || "ITS UR BOY ησвιтα💗👑🏴",
  botname: process.env.BOT_NAME || "ησвιтα💗👑🏴-𝐌𝐃-",
  ownername: process.env.OWNER_NAME || "ησвιтα💗👑🏴",
  errorChat: process.env.ERROR_CHAT || "3584573983493",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
