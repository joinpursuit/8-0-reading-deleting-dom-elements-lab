let el = document.querySelector("nav ul li");
    el.remove();

let ele = document.querySelector("p span");
    ele.remove();



let lastPost = document.querySelectorAll(".posts article")
    for(let post of lastPost){
        if(post.textContent.includes("You -- yes you!")){
            post.remove();
        }
    }

    

let titles = document.querySelectorAll("body h3");
    for(let title of titles){
        title.remove();
    }

