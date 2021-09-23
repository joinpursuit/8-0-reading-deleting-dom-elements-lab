let el = document.querySelector("header nav ul li");
el.remove();

let post = document.querySelector(".featured span");
post.remove();


let last = document.querySelectorAll("main .posts article")
last[last.length-1].remove();

let heading = document.querySelectorAll("main .posts article h3");
heading.forEach((h3)=>{
    h3.remove();
})


