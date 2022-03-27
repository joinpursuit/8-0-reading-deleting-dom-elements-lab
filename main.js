const allPost = document.querySelector('li');
allPost.remove();

const rtSpan = document.querySelector('span');
rtSpan.remove();

const art = document.querySelectorAll('article')
    art.forEach((article, index)=> {
        if (index === 3){
            article.remove()
        }
    })

const headers = document.querySelectorAll('h3')
headers.forEach((header)=>{
header.remove()
});
