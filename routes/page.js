
var express = require('express');
var router = express.Router();

const page = require("../controllers/pageController")

router.get("/post", page.postWebsite)

module.exports = router;
