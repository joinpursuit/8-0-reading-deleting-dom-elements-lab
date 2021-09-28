let elem = document.querySelector("li");
    elem.remove();
    // console.log("a");
    // elem.style.display = "none";

let el = document.querySelector("span");
    el.remove();


let posts = document.querySelector(".posts article");
    let lastPost = posts[posts.length-1];
    lastPost.remove();


let element = document.querySelectorAll(".featured h2, .posts h3")
    for(let i = 0;i < element.length; i++) {
        element[i].remove();        
}

// element[i].remove is throwing an error --- could be Cypres messing up. 
// element[i] should delete all elements in node list
// need to find better way to select multiple indexes at the same time
    

