const aHead=document.querySelector("li")
aHead.remove()
const span= document.querySelector("aside span")
span.remove()


const articles=document.querySelectorAll(".posts article")

for (let article of articles){
    // debugger
    const para=article.querySelector("p")
    const h3=article.querySelector("h3")
    
    if (h3.textContent==="Stop Planning"){
        article.remove()
    }
    h3.remove()
}

