const allPostLink = document.querySelector ("li").remove()
const readTimeSpan = document.querySelector ("span").remove()
const lastPost = document.querySelector (".posts article:last-child").remove()
const nonFeaturedTile = document.querySelectorAll(".posts h3"); 
for (articletitle of nonFeaturedTile) { articletitle.remove()}