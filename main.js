let postAll = document.querySelector("header nav ul li ");
postAll.remove();

let featuredSpan = document.querySelector(".featured article aside");
featuredSpan.remove();

let planStop = document.querySelectorAll("main .posts article");
planStop[planStop.length-1].remove();

let nonFeatured =document.querySelectorAll("main .posts article h3");
for(let featured of nonFeatured){
    featured.remove()
}