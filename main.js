//console.log(Hello);

const allPosts= document.querySelector("li");
//console.log(allPosts)

allPosts.remove();


const readTime = document.querySelector("span");
//let removedSpan= document.querySelector("span")

readTime.remove();

const articles = document.querySelectorAll("article");

let test;
for(let article of articles){
    test = article;
}
test.remove();
//let removedPost = document.querySelector(".posts article")

//removedPost.remove()

const titles = document.querySelectorAll(" h3");
for(let title of titles){
    title.remove();
  
    
}

//removedTitles.forEach((title)=>{
  //  title.remove()






