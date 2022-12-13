const allPosts = document.querySelector("li");
 allPosts.remove();

 const readTime = document.querySelector("span");
 readTime.remove();

 const lastArticle = document.querySelectorAll("article")
 lastArticle[lastArticle.length-1].remove()

 const nonFeaturedTitles = document.querySelectorAll(".posts h3")
 nonFeaturedTitles.forEach(title => title.remove())

 


