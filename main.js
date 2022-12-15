const listedLinks = document.querySelector('li')

    // console.log(listedLinks)
    listedLinks.remove()


const reads = document.querySelectorAll(".featured span")

    // console.log(reads)
    reads[0].remove()


// const reads = document.querySelectorAll('span')
// console.log(span)


const titles = document.querySelectorAll('main .posts h3')
console.log(titles)
for (let title of titles) {
    title.remove()
}

const clientPosts = document.querySelector('main .posts article')

 clientPosts.remove()




