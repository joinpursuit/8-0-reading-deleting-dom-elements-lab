// Remove the "All Posts" link from the header.
document.querySelector("header nav ul li").remove()

//  Remove the span element that contains the "Read Time" in the featured post. The featured post is the first post on the page.
let els2 = document.querySelectorAll(".featured span");

for(let el2 of els2){
    if(el2.textContent.includes("Read Time")){
        el2.remove();
    }
}

//  Remove the last post from the page, titled "Stop Planning".
let els3 = document.querySelectorAll("main .posts article");

for(let el3 of els3){
    if(el3.textContent.includes("You -- yes you!")){
        el3.remove();
    }
}

//  Remove all titles from all non-featured posts.

let els4 = document.querySelectorAll("main .posts h3");

for(let el4 of els4){
    el4.remove()
}
