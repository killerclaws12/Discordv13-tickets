module.exports = {
  prefix: ">",
  status: {
    		name: "your tickets!",
    		type: "watching"
  },
  ExpressServer: true, //If you wanted to make the website run or not
  Port: 3000, //Which port website gonna be hosted
   emojis: {
        giveaway: "🎉",
        special: "🔴",
        general: "870914038933098517"
  },
  ticketembed: {
    title: "Tickets",
    description: "To create a ticket, click the button that suits your request!",
    footer: "By Doggo"
  },
token: process.env.TOKEN || "OTA2MDE0NDE1NjM0MTc0MDAy.YYSdrQ.cdfh_HYcaZgPxKxPJUE-cbhBhAM",
mongo: process.env.MONGO || "mongodbmongodb+srv://admin:admin@cluster0.qro2b.mongodb.net/ticketssss"
};
