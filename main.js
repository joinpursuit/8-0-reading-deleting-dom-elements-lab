 const links = document.querySelectorAll("nav ul li");
links[0].remove()

const spanTime = document.querySelector(".featured aside span");
spanTime.remove();

const lastPost = document.querySelectorAll("main .posts article");
lastPost[lastPost.length - 1].remove();

const noTitle = document.querySelectorAll("main .posts h3");
noTitle.forEach(title => title.remove());


