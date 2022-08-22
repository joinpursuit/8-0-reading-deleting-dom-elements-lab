const header = document.querySelector("li");
const readTime = document.querySelectorAll("span");
const articles = document.querySelectorAll("article");

// Removes only the first li, admittedly.
if (header.textContent.includes("All Posts")) header.remove();

// iterate over node list to remove spans that include string "Read Time".
readTime.forEach((span) => {
  if (span.textContent.includes("Read Time")) {
    span.remove();
  }
});

//uh.
articles.forEach((article, i) => {
  if (articles.length - 1 === i) {
    article.remove();
  }
  i++;
});

// got random.
// accumulator that iterates over all header type and removes each one systematically.
for (let i = 1; i < 7; i++) {
  const currentHeader = document.querySelectorAll(`h${i}`);
  currentHeader.forEach((header) => header.remove());
}
