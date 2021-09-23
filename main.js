const posts = document.querySelector('header nav ul li');
posts.remove();

const timeSpans = document.querySelectorAll('span')
timeSpans.forEach(timeSpan => timeSpan.remove())

const removeLastPost = document.querySelectorAll('main .posts article')
removeLastPost[removeLastPost.length -1].remove();

const noPosts = document.querySelectorAll('main .posts h3')
noPosts.forEach(noPost => noPost.remove() );



