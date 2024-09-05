//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaqgxNt5q08c9XMItG3P";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaqgxNt5q08c9XMItG3P";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2348121373516";
global.owner = process.env.OWNER_NUMBER || "2348121373516";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1BOWmhEb3MyRDVPa1ltVnJ5QWIzVkNvY1Z1NlpRcHdLUlc3ZjZNUXZtcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmVyYVQvN3FNU2R4SFQwcGZzemRPNkROZW1OOWREN3NMcFhRMU4wOEpWWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTFhlRy9UYXI4dWJ1Y1kvOXhIYjRzdlFsRTVxbk92NXczbjl6dHJiOGxNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkeGJhMUhOb2xBUkgrTGpuSjBqZDlaK3ZjNnd1RDFKRWZWa3d5YXNlYzJVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktHa3o1Vm5GRm9EWFJlTElEY0VBRlo3WXpFbDlXQWVvOEhQR2toZWxSbE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFPd1creU4wMmI0cndEcVBna2hBM2lLT1BJOFozTGcwSmxXdlVlT2gxa0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU1vWkNIcmtlRHVZSHpHWVZiYXd1b1duWGM0SFR1VlRxSGFUZ3laMk4wVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0pFK1ZOZEszVkZ2TUFpaHJtbkIwQzkvZGZ1aHI0WDNoNG1DWERDOUJHcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkphT1F0VjA3Mk50SDluMTFkMjlPTW1td0N4ZDAzYXp1MTB4OFpubUZIMENlTzc1TjFNcnR0MlYrY2t4eVhWZVoyNWJHV1E0QnJadi9UNmQxdHlSRmh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI5LCJhZHZTZWNyZXRLZXkiOiJjRnpHWlVyNEdSS05HNEEvWi8xMkVCamd0V3ljR1lXRGNOSlJYcWlMU01zPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxMTI0MDg4MTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTVBQ0MxOTJGMUZDMTA4NUEyMzRGRURBNjNDQTg2NDQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTM2MzM1MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTExMjQwODgxMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2MTRFNUU2Q0ZGQ0VDMEI5NDZBQUEwQzcyNDUzMEQ4NCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1MzYzMzUxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJLRVZmLVh4QlJCeTVvWURnWWNiczV3IiwicGhvbmVJZCI6ImRlYWJhMmJjLTI1MmUtNGNiNi04MTgxLTdmMjRlNzc1NGQ1MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRVczVllML3dXMXFLaXhkdmpRdXVEWXJlSnc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0lJVGxzYTZLRERWVWVUNVJNYXMrcE9GQklrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkE2R1ZKTlpBIiwibWUiOnsiaWQiOiIyMzQ5MTEyNDA4ODEyOjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRGV4dGVyIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPR3pyYllFRUlicDI3WUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJkcFRBMTBodU9TRytuT2d0MTBzQkVMSVBVMFNBZ0t6blpxNVExclMzamxNPSIsImFjY291bnRTaWduYXR1cmUiOiJWbW5vcnJqM1NYYkd5Rk5zQk8wVC8zanJ2RVFzV2pnNTRIVkdyNlhya1FVYU0yZDFIcXJMSGU1SmxqTUJpaU91TWlUUjk3ZGZxb2I2Z2Z3U05OL3pEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYVo3SFB1OTdOcHhEQm1BQnAvWUZSTWVER3FUT1pZSnpoL1RIdWZlSXNYeHJJWG9KOUpiSW1hMWNwaUJHcTd0cWpOeC9jZm4xNUxLZ3JRYU1OdEI2Z2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTEyNDA4ODEyOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWGFVd05kSWJqa2h2cHpvTGRkTEFSQ3lEMU5FZ0lDczUyYXVVTmEwdDQ1VCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTM2MzM0OH0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "QUEEN_NIKKA",
  packname: process.env.PACK_NAME || "N I K K A",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
