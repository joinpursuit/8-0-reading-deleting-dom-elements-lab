let rmvPosts = document.querySelector("header nav ul li").remove();

let rmvReadTime = document.querySelector(".featured span").remove();

let rmvLastPost = document.querySelectorAll(".posts article");
rmvLastPost[rmvLastPost.length - 1].remove();

let rmvAllTitles = document.querySelectorAll(".posts h3");
rmvAllTitles.forEach(title => title.remove());

