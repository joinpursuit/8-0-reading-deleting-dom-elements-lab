const removeAllPosts = document.querySelector('li')
removeAllPosts.remove("All Posts")

const removeReadTime = document.querySelector('.featured span')
removeReadTime.remove("Read Time")

const removeLastPost = document.querySelector('main .posts article')
removeLastPost.remove("Stop Planning")


const removeTitles = document.querySelectorAll('main .posts h3');
removeTitles.forEach((title) => {
  title.remove(title);
});