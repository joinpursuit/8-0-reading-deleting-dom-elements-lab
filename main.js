const header = document.querySelector(`header nav ul li`)
console.log(header.remove())

const span = document.querySelector(`.featured span `)
console.log(span.remove())

const article = document.querySelector(`main .posts article`)
console.log(article.remove())

 const title = document.querySelectorAll(`h3`)
 console.log(title)

 title.forEach((titles) => {
    console.log(titles.remove())
 })
