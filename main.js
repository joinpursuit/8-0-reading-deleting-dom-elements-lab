const li = document.querySelector("header nav ul li")
const span = document.querySelector("main section article aside p span")
const stopPlanning = document.querySelectorAll("main section article")
const noFeatures = document.querySelectorAll("main .posts h3");

li.remove()
span.remove()

stopPlanning[stopPlanning.length - 1].remove()

for(let elem of noFeatures) {
    elem.remove()
}

