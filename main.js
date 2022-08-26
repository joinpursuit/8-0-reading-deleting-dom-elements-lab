// removes the first a element
const li = document.querySelector("li");
li.remove();

// removes the first span element
const span = document.querySelector("span");
span.remove();

// removes last article on the lastPost arr
const lastPost = document.querySelectorAll("article");
lastPost[3].remove();

const removeTitles = document.querySelectorAll("h3")
removeTitles.forEach(title => title.remove())