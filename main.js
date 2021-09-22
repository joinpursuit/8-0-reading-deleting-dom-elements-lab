    let els = document.querySelectorAll("header nav ul li");
    for(let el of els){
        if(el.textContent.includes("All Posts")){
            el.remove();
        }
    }

    let spans = document.querySelectorAll(".featured span");
    for(let span of spans){
        if(span.textContent.includes("Read Time")){
            span.remove();
        }
    }

    let posts = document.querySelectorAll("main .posts article");
    for(let post of posts){
        if(post.textContent.includes("You -- yes you!")){
            post.remove();
        }
    }

    let titles = document.querySelectorAll("main .posts h3");
    for(let title of titles){
            title.remove();
    }

