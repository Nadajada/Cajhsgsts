/**
* @EMON HAWLADAR
* @warn Do not edit code or edit credits
* @Dont Change This Credits Otherwisw Your Bot Lol
*/
module.exports.config = {
  name: "Jan",
  version: "1.0.0",
  permssion: 0,
  credits: "EMon-BHai",
  prefix: 'awto',
  description: "Dont Change This Credits Otherwisw Your Bot Lol",
  usages: "sim (ask) reply simsimi",
  category: "user",
  cooldowns: 2
};

module.exports.run = async ({ api, event,args }) => {
const axios = require("axios");
let query = args.join(" ");
if (!query)
    return api.sendMessage(`\nআমি এখন জিঁলাঁপিঁ বস আর সাথে বিজি আছি\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====", "\njan ইনবক্সে গুতা মি😑😑 ?\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====","\n ভেঙে মোর ঘরের তালা৷ কেউ জি্ঁলা্ঁপি্ঁকে্ঁ নিয়া পালা😑😑\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====","\nI love you baby meye hole chipay aso\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====", "\nLove you 3000-😍ummah 9000💋💝\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====", "\nji bolen ki korte pari ami apnar jonno?\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====","\nআমাকে না ডেকে আমার বস জিঁলাঁলিঁ কে একটা জি এফ দেন\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====", "\n Ato daktasen kn bujhlam na 😡\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====", "\n jan bal falaba,🙂\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====","\nask amr mon vlo nei dakben na🙂\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====", "\nHmm jan ummah bby😘😘\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====","\njan hanga korba 😑🙂😑","\niss ato dako keno lojja lage to 🫦🙈\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====","\nsuna tomare amar valo lage,🙈😽\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====","\nজি তুমি কি আমাকে ডেকেছো 😇🖤🥀\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====","\n jan moye moye😑😑\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====","\nতোর কোন কোন জায়গায় বেথা গো বান্ধবী ললিতা🥵🥵\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====","\nজান জিলাপি 20 বছরের কচি প্লিজ পটে যাও🤐😁😁\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====","\nএত ডাকিস কেন বুঝা আমারে😡 আপডেট মাইয়া 🤪🤪\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====","\n__চা দিয়ে চানাচুর খাচ্ছি-😌\n\n_ ᴍʏ ʟɪғᴇ ᴍʏ ʀᴜʟᴇs ! 😎\n_ তাতে তোমার কি--😒\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====","\n💋💋💋💋👈👈এই নে মিষ্টি দিলাম খাও💋😋😋🤪🤪🤣🤣\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====","\n জান কাম টু মাই চেম্বার🤪🤣\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====","\nকচি মেয়েরা আমার বস জিঁলাঁপিঁ কে গুতা দাও\n👇👇👇👇👇👇👇👇 \nhttps://m.me/ji.la.pi.6\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====", "\nজান যদি থাকে নসিরে বাচ্চা সহ আসিবে🤣🤣🤣😁😀\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====","\n জান তোর ওই গলিগে উম্মাহ💋💋\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====","\nজানু আমি জি্ঁলা্ঁপি্ঁর্ঁ লুচ্চা বট🥵🥵🥵\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====", "\njan যেহেতু তুমি সিঙ্গেল তাই 😐\n\n মানবতার খাতিরে 😊🙃\n🙈 🙈I LOVE YOU 🙈🙈\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====", "\n--- 🦟 মশাকে মারতে চেয়েছিলাম\nকিন্তু পারলাম না কারণ 😒\n-- ওর শরীরে তো আমারই রক্ত বইছে!🙂\n...... this is মানবতা bro🙈\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====", "\nJan চুপচাপ🤫\n~~তোর নাম্বার দিয়া যা 😒🐸\n\n°•প্রেম করমু😁🙈🙈😁\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====", "\nআম্মু ওই যে ওরে লাগবে 🫵🥺===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====", "\nhmm jan\nআমিচাঁদে বসে টিভি দেখছি🥱🤧\nতুই ও দেখবি আয়...!! 🍂🤓\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====", "\n-oii jan Tumi 🫵---\nনাকি আমার উপর\n-ক্রাশ খাইলে সত্যিই নাকি..🤨🙈\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====", "\noii--তাকায় আছো কেন?\nপ্রেম করবা🤭🙈\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====","\n কি খুঁজছো, আপন মানুষ.?🙂🤍\nআকাশের দিকে তাকাও 'সৃষ্টিকর্তা ছাড়া কাউকে\nআপন মনে হবে না..!❤️‍🩹🌸", "\nকিরে---- --------\nশুনলাম তুমি নাকি প্রতি রাত বিয়ের জন্য কদিস😁😁\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====", "\nজীবনের গল্পটা শুরু হওয়ার আগেই শেষ হয়ে গেছে হয়তো আর কখনো সাজাতে পারবো না আগের মত করে\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====", "\nথাকতে কদর করতে শিখো\n কারন \nকিছু মানুষ জীবনে বারবার আসে না\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====", "\nপ্রয়োজনের চেয়ে বেশি পেয়ে গেলে \n সেটাকে অবহেলা করে\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====", "\nএকদিন হারিয়ে যাবো তিন টুকরো কাফনে\nপ্রিয়জনেরাই বলিবে দেরি কিসের দাফনে\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====", "\nমুখের কথা.......\n\nরাগের সময়ই সই,,নিয় না মনে রাগের মথায় অনেক কিছু কই\nরাগ শেষে তোমারি রই\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====", "\nখুব করে চেয়েও তোমাকে পাইনি\n অথচ তুমি যে আমার ভাগ্যে ছিলে না সেটা কখনো বুঝতে পারনি\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====", "\nবেহারা মন সারাক্ষণ শুধু তাকেই চায়\nযার কাছে আমি অবহেলিত\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====", "\nআমরা বড় হয়ে মানুষ চিনি না\n\n আমরা মানুষ চিনতে চিনতে বড় হই\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====", "\nআমি অল্পতেই খুশি হয়ে যাই তাই হয়তো আমার ভাগ্যে ওই অল্পটুকুও জোটে টা\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====", "\nযদি জীবনে একটা delete button থাকতো তাহলে কিছু স্মৃতি কিছু অনুভুতি আর কিছু মানুষ কে মুছে ফেলতাম জীবনের ডায়েরি থেকে\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====", "\nজানু\n\nআমার তো সবাই মানুষ \nপার্থক্য শুধু মানসিতায়\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====", "\nশরীল তো সবাই ছুঁতে পারে\n\nকিন্ত মন ছোয়ার ক্ষমতা সবার থাকে না\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====", "\n জীবনের সব চেয়ে পছন্দের জীনিস গুলো\n\nহয়তো অবৈধ , নয়তো নিষিদ্ধ\nহয়তো দামি নয়তো অন্যকরো\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====", "\nকে তুমি বৎস,\nধরিয়া মৎস,\nবেচিয়া গঞ্জে,\nআকুলো কুঞ্জে,\nনা খাইয়া তাজা,\nকেনো তুমি সেবন করিলে,\nমেয়াদ উত্তির্ন গাজা।🧘‍♀️\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 =====", "\nতুমি আমার মিষ্টী আলু\n লাল টুকটুকে গাজর\nতুমি আমার প্রাণভোমরা\n তুমি বুকের ফাঁজর\nতুমি আমার ফুচকা চটপটি\n মজার ঝালমুড়ি\nতুমি কি চাও তোমার জন্য\n আরো চাপা মারি\n===== 𝚁𝙰𝙺𝙸𝙱 𝙱𝙾𝚃 ====="`, event.threadID, event.messageID);
const res = await axios.get(`http://fi3.bot-hosting.net:20536/sim?type=ask&ask=${query}`);
var plaintext = res.data.answer;
api.sendMessage(plaintext, event.threadID, event.messageID)
}
