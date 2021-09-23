const navItems = document.querySelectorAll("nav ul li");
console.log(navItems);

for(let el of navItems){
    if(el.textContent.includes("All Posts")){
        el.remove();
    }
}

const spanEls = document.querySelectorAll("p span");
console.log(spanEls);

for(let el of spanEls){
    if(el.textContent.includes("Read Time")){
        el.remove();
    }
}

const h3tags = document.querySelectorAll(".posts article");
console.log(h3tags);

for(let el of h3tags){
    if(el.textContent.includes("You -- yes you!")){
        el.remove();
    }
}

const titles = document.querySelectorAll("body h3");
for(let el of titles){
   el.remove();
    
}