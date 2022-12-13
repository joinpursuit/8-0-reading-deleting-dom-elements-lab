const knees = document.querySelector("li");
knees.remove()

// NOT knees.ul.removeChild(knees);
/* Selet the target element that I want to remove using the DOM method querySelector().
Then, select the parent element of the target element and use the removeChild() method.
*/

document.querySelector("span").remove();

const last = document.querySelectorAll('article');
last[2].remove();

//see also “stopPlanning[stopPlanning.length-1].remove();”


const bland = document.querySelectorAll("h3")
bland.forEach((title) => {
title.remove()
}
);
