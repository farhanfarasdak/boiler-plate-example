// POST /post
// { "content": "hari ini indah ya" }
const { Post } = require('../models')
exports.createPost =  async (req, res) => {
  const data = await Post.create({
    content: req.body.content
  })

  res.status(201).send(data)
}


// GET /post
exports.getPosts = async (req, res) => {
  const data = await Post.findAll()

  res.send(data)
}