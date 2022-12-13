const allPost = document.querySelector("li"); allPost.remove()
//add defer to the link in index.html to main.js from src and then remove the all Post link

const spanReadTime = document.querySelector("span");
spanReadTime.remove()

//remove span read time element

const lastPost = document.querySelectorAll("article");
lastPost[lastPost.length-1].remove()
// can be done another way; ‘main.posts article'
//another way is; const lastPost = document.querySelectorAll('article'); lastPost[2].remove()

const allHeading = document.querySelectorAll("h3")
allHeading.forEach((allHeading) => {
    allHeading.remove()
})
//allHeading.remove() does not work alone