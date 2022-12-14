const listedLinks = document.querySelectorAll('li')
for (let listedLink of listedLinks) {
    listedLinks[0].remove()
}

const reads = document.querySelectorAll('span')
for (let read of reads) {
    read.remove()
}

const titles = document.querySelectorAll('h3')
for (let title of titles) {
    title.remove()
}

const clientPosts = document.querySelectorAll('article')
// console.log(document.querySelectorAll('article'))
for (let clientPost of clientPosts) {
    clientPosts[clientPosts.length -1].remove()
}

