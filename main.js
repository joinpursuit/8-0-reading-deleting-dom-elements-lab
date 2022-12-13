const removePost = document.querySelector('li');
    removePost.remove();
    
const el = document.querySelector('span');
    el.remove();

const posts = document.querySelectorAll('article');
    let lastArticle = posts[posts.length-1];
    lastArticle.remove();


const element = document.querySelectorAll('h3')
    for(let i = 0;i < element.length; i++) {
        element[i].remove();        
}