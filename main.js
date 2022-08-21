document.querySelector("header").querySelector("li").remove();

let posts_span = [...document.querySelectorAll("span")];
posts_span.forEach(el=>el.remove());

let articles = [...document.querySelectorAll("article h3")];
articles.forEach(el=>{
  
  if(el.innerText=="Stop Planning") 
    el.parentNode.remove()
  else
    el.remove();
})

