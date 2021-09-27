let elem = document.querySelector("li");
    elem.remove();
    // console.log("a");
    // elem.style.display = "none";

let el = document.querySelector("span");
    el.remove();


let lastPost = document.querySelector(".posts article");
    lastPost.remove();


let element = document.querySelectorAll(".featured h2, .posts h3")
    for(let i = 0;i < element.length; i++) {
        element[0].remove(), element[1].remove(), element[2].remove();        
}
    

