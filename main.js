const allPosts = document.querySelector("header nav ul li")
allPosts.remove();

 const removeSpan = document.querySelector("span")
 removeSpan.remove()

  const stopPlanning = document.querySelector("main .posts article")
 stopPlanning.remove()

  const noTitle = document.querySelectorAll("main .posts h3")
noTitle.forEach((titles => titles.remove()))d 