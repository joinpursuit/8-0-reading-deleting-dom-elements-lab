document.querySelector("header nav ul li").remove();
document.querySelector(".featured span").remove();

const h3 = document.querySelectorAll("main .posts article");
for (let el of h3) {
  if (el.textContent.includes("Stop Planning")) {
    el.remove();
  }
}

const title = document.querySelectorAll("main .posts h3");
for (let el of title) {
  el.remove();
}
