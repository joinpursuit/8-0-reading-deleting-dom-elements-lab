document.querySelector("header").querySelector("li").remove();

const gitthatspan = document.querySelector("span");

gitthatspan.remove();

const removewhackpost = document.querySelectorAll("article h3");
removewhackpost.forEach(el=>{
    if(el.innerText=="Stop Planning") 
      el.parentElement.remove()
  }
  )

  const youNotTheOne = document.querySelectorAll(".posts h3");
  youNotTheOne.forEach(el=>{el.remove()})