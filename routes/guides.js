const express = require("express");
const router = express.Router();
const discordBot = require("../bot");
const config = require('../config.json');
const app = express();
app.set('view engine', 'ejs');
const UserMod = require('../models/User')


router.get("/", function(request, response) {
  response.render(__dirname + "/views/index.ejs", {
    SiteName: config.siteName
  });
});

router.get("/invite", function(request, response) {
  response.redirect("https://discordapp.com/api/oauth2/authorize?client_id="+config.bot.id +"&permissions=8&scope=bot", {
    SiteName: config.siteName
  });
});
router.get("/easter", function(request, response){
  response.render(__dirname + "/views/easteregg.ejs", {
    SiteName: config.siteName
  });
});
// if 404
router.get("*", function(request, response) {
  response.render(__dirname + "/views/errors/404.ejs", {
    SiteName: config.siteName
  });
});
            
console.log('------------[ACTIVATING]-------------\nSHARD: guides.js ONLINE - This is a standalone shard!\n-------------------------')
module.exports = router;