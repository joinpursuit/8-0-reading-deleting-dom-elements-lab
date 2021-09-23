const allPosts = document.querySelector("header nav ul li") //header li
allPosts.remove();
/*in order to access the first link, you must put list all the tags
that it's under.*/

const readTime = document.querySelector(".featured span")
readTime.remove();
//only one span tag in the featured class.//

const posts = document.querySelectorAll(".posts article")
posts[2].remove();

const title = document.querySelectorAll(".posts h3")
title.forEach((title) => title.remove()) 