let allPostLink = document.querySelector("li")
let span = document.querySelector("span")
let posts = document.querySelectorAll("article")
let titles = document.querySelectorAll("h3")

allPostLink.remove()
span.remove()
posts[posts.length-1].remove()
titles.forEach(title => title.remove())
