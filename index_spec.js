let headerMove = document.querySelectorAll("header nav ul li ");
let RemoveSpan = document.querySelectorAll(".featured span");
let lastSection = document.querySelectorAll("main .posts article");
let noPost = document.querySelectorAll("main .posts h3");


// remove the header link...
 for (let ay of headerMove){
    if(ay.textContent.includes("All Posts")){
        ay.remove();
    }
 };

//  remove the span...
 for(let rem of RemoveSpan){
    rem.remove();
 };

//  should not include the last post ...
for (let last of lastSection){
    if(last.textContent.includes("You -- yes you!")){
        last.remove();
    }
}

 // should not have a title for any of the post...
for  (let no of noPost){
    no.remove();
}