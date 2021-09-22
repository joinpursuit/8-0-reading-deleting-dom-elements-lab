const rmAllPostsLink = document.querySelector("li")
rmAllPostsLink.remove()

const rmReadTimeSpan = document.querySelector("span")
rmReadTimeSpan.remove()

const rmLastPost = document.querySelectorAll("article")
rmLastPost[rmLastPost.length-1].remove()

const rmTitlePost = document.querySelectorAll("h3");
rmTitlePost.forEach((title) => title.remove());