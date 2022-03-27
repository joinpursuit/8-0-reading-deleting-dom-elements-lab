//console.log("connected");
const posts = document.querySelector('li')
posts.remove()

const readTime = document.querySelector('#read')
readTime.remove()

const lastPost = document.querySelector('.lastPost')
lastPost.remove();

const titles = document.querySelectorAll('.posts h3');

titles.forEach(title=>{
    
    title.remove()
  });