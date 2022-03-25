let h1Class = document.querySelector("li");
h1Class.remove();

const spanElm = document.querySelector("span");
spanElm.remove();

const article = document.getElementsByClassName("posts");
for (art of article) {
  art.lastElementChild.remove();
}
const title = document.querySelectorAll("h3");
for (elm of title) {
  elm.remove();
}
