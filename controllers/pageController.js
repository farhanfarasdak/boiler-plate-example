exports.postWebsite = async (req, res) => {
  const resp = await fetch('http://localhost:3000/post')
  const data = await resp.json()

  res.render('post', { posts: data })
}