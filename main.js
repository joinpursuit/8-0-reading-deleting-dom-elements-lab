


const links = document.querySelectorAll("header nav ul li")
const removelink = links[0].remove();

const span = document.querySelector(".featured aside span")

const removeSpan = span.remove();

const post = document.querySelectorAll(".posts article")

const removeLastPost = post[post.length-1].remove();
  
const title = document.querySelectorAll(".posts article h3")

const removeAllTitle = title.forEach((title) => title.remove())

