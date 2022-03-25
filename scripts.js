// => Test-01: Removing the first list item of the menu
document.querySelector("header ul li").remove();
// => Test-02: Removing span element on festured article
document.querySelector(".featured aside p span").remove();
// => Test-03: Removing last article on category posts
document.querySelector(".posts article:last-child").remove();
// => Test-04: Removing all titles on articles within category posts
const allHeadings = document.querySelectorAll(".posts h3");
allHeadings.forEach(title => {title.remove()})