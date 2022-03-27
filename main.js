let removeAllPost = document.querySelector('li');
removeAllPost.remove();

let removeReadTime = document.querySelector('span');
removeReadTime.remove();

let removeLast = document.querySelectorAll("article");
removeLast[removeLast.length-1].remove()

let removeAllTitles = document.querySelectorAll(".posts h3").forEach(title => title.remove());