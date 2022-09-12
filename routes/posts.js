
var express = require('express');
var router = express.Router();
const jsonParser = require('body-parser').json();

const post = require("../controllers/postController")

router.get("/", post.getPosts)
router.post("/", jsonParser, post.createPost)

module.exports = router;
