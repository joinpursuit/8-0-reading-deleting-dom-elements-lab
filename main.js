const allPost = document.querySelector("li")
allPost.remove();

const featuredTime = document.querySelector("span")
featuredTime.remove();

const stopPlanning = document.querySelectorAll(".posts article")
stopPlanning[stopPlanning.length-1].remove()

const nonFeatured = document.querySelectorAll(".posts h3")
for (title of nonFeatured) {
    title.remove();
}