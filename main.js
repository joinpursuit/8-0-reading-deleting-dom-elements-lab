//console.log("connected");
const posts = document.querySelector('li')
posts.remove()

const readTime = document.querySelector('#read')
readTime.remove()

const lastPost = document.querySelector('.lastPost')
lastPost.remove();

const titles = document.querySelectorAll('.titles');

titles.forEach(title=>{
    
    title.remove()
  });