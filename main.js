const allPosts = document.querySelector("li");
console.log(allPosts)
allPosts.remove();
const readTime = document.querySelector("aside p");
console.log(readTime)
readTime.remove();
const posts = document.querySelectorAll("article")
console.log(posts[3])
posts[3].remove()
const titles = document.querySelectorAll("h3")
console.log(titles)
for (const title of titles) {
    title.remove()
}