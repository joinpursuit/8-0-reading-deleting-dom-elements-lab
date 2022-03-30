let oldPost = document.querySelector("li");

    oldPost.remove()

let removedSpan = document.querySelector("span")

    removedSpan.remove()

let removedPost = document.querySelector(".posts article")

    removedPost.remove()

let removedTitles = document.querySelectorAll(".posts h3")
    removedTitles.forEach((title) => {
        title.remove()
    })