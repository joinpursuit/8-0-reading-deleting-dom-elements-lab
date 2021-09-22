const rmLink = document.querySelectorAll("header nav ul li");
rmLink[0].remove();

const rmReadTime = document.querySelector(".featured aside span");
rmReadTime.remove();

const rmLastPost = document.querySelectorAll("main .posts article");
rmLastPost[rmLastPost.length - 1].remove();

const rmTitlePost = document.querySelectorAll("main .posts h3");
rmTitlePost.forEach((title) => title.remove());
