const allPost = document.querySelector("li"); allPost.remove()

 const spanReadTime = document.querySelector("span");
 spanReadTime.remove()


 const lastPost = document.querySelectorAll("article");
 lastPost[lastPost.length-1].remove()

 const allHeading = document.querySelectorAll("h3")
 allHeading.forEach((allHeading) => {
     allHeading.remove()
 })




 
