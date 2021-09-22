// let els = document.querySelectorAll("a");
// for(let el of els){
//     if(el.textContent.includes("All Posts")){
//         el.remove();
//     }
// }

let el = document.querySelector("header nav ul li");
el.remove();

let els = document.querySelectorAll("span");
for(let el of els){
    if(el.textContent.includes("Read Time:")){
        el.remove();
    }
}

let removePost = document.querySelector("main .posts article");
removePost.remove();

let removeNoFeatures = document.querySelectorAll("main .posts h3");
for(let el of removeNoFeatures){
    el.remove();
}