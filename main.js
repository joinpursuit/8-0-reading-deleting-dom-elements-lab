// Header -> have the 'All Posts' link gone --v
const noPosts = document.querySelector('li')
// ^---variable sets to select into the the first element w/li label
noPosts.remove()
// ^--.remove() the variable to remove desire section

// Featured Post -> 
// should not have the 'Read Time' span element---v
const noSpan = document.querySelector('.featured span')
noSpan.remove()

//  Posts ->
// should not include the last post --v
const noLastPost = document.querySelector('main .posts article');
noLastPost.remove()
//  should not have a title for any of the posts --v
const noPostAtAll = document.querySelectorAll('main .posts h3')
for (const getH3 of noPostAtAll) {
    getH3.remove()
}
