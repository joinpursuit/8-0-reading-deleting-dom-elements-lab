const noPosts = document.querySelector("header nav ul li");
noPosts.remove()
const tooPost = document.querySelector("article aside p span");
tooPost.remove()
const bananaPost = document.querySelector("main .posts article");
bananaPost.remove()
scratchyAshyDino = document.querySelectorAll('main .posts h3');
for (const h3t of scratchyAshyDino) {
    h3t.remove();
}