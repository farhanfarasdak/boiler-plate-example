const handlePostContent = async () => {
  const contentData = document.getElementById("postContent").value

  const resp = await fetch('http://localhost:3000/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      content: contentData
    })
  })

  if (resp.status == 201){
    alert('SUCCESS INPUT DATA')
  }else{
    alert('FAILED INPUT DATA')
  }
  location.reload()
}