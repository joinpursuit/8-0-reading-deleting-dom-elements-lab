let el = document.querySelector("nav li");
el.remove();

let ele = document.querySelector("aside span");
ele.remove();

const h3tags = document.querySelectorAll(".posts article");

for (let el of h3tags) {
  if (el.textContent.includes("You -- yes you!")) {
    el.remove();
  }
}

let titles = document.querySelectorAll("article");
for (let title of titles) {
  if (title.innerHTML.includes("h3")) {
    title.remove();
  }
}
