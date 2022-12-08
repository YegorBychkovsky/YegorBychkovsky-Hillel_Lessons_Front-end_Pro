const inputPosts = document.querySelector("#search-post")
const getPost = document.querySelector(".getPost")
const getComments = document.querySelector(".getComments")
const body = document.querySelector("body")


function getPostById(PostId) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${PostId}`)
    .then((response) => {
      if (response.status === 404) {
        reject("404, Post not found")
      }
      return response.json()
    })
    .then((json) => {
      return resolve(json)
    })
    .catch((err) => {
      reject(err);
    })
  })
}


function getCommentByPostId() {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then((response) => {
      if (response.status === 404) {
        reject("404, comment not found")
      }
      return response.json()
    })
    .then((json) => {
      return resolve(json);
    })
    .catch((err) => {
      reject(err);
    })
  })
}

getPost.addEventListener("click", () => {
  getPost.style.visibility = "hidden"
  inputPosts.style.visibility = "hidden"
  const div = document.createElement("div")
  body.appendChild(div)
  getPostById(inputPosts.value)
    .then((post) => {
      div.innerHTML = 
      `<p>
      Title: "${post.title} <br> 
      Post: " ${post.body} <br> 
      </p>`
      console.log(post);
    })
    .catch((err) => {
      const post = ("Error: " + err)
      div.innerText = post
      console.warn(post);
    })
  getComments.style.visibility = "visible"
})

getComments.addEventListener("click", () => {
  
  getCommentByPostId()
    .then((comment) => {
      for (let i = 0; i < comment.length; i++) {
        if (comment[i].postId === +inputPosts.value) {
          console.log(comment[i]);
          const div = document.createElement("div")
          body.appendChild(div)
          div.innerHTML = 
          `<p> 
          Comment № ${i + 1} <br> 
          Name: ${comment[i].name} <br> 
          Email: ${comment[i].email}<br> 
          Comment: ${comment[i].body}<br> 
          </p>`
        }
      }
    })
    .catch((err) => {
      const post = ("Error: " + err)
      div.innerText = post
      console.warn(post);
    })
})


