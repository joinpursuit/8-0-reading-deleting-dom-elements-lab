const listedLinks = document.querySelector('li')

    // console.log(listedLinks)
    listedLinks.remove()


const reads = document.querySelectorAll("span")

    // console.log(reads)
    reads[0].remove()


// const reads = document.querySelectorAll('span')
// console.log(span)


const titles = document.querySelectorAll('h3')
for (let title of titles) {
    title.remove()
}

const clientPosts = document.querySelectorAll('article')
// console.log(document.querySelectorAll('article'))
for (let clientPost of clientPosts) {
    clientPosts[clientPosts.length -1].remove()
}

