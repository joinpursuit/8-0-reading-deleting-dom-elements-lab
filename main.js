const allPosts = document.querySelector("nav ul li");
allPosts.remove();

const removeSpan = document.querySelector("aside p span");
removeSpan.remove();

const removeLastPost = document.querySelectorAll("main .posts article")[2];
removeLastPost.remove();

const removeH3Title = document.querySelectorAll("main .posts h3");
for (let i = 0; i < removeH3Title.length; i++){
    removeH3Title[i].remove()
};


