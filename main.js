
let removeAllPost = document.querySelector('li');
removeAllPost.remove();

let removeReadTime = document.querySelector('span');
removeReadTime.remove();

let removeStopPlanning = document.querySelectorAll("article");
removeStopPlanning[removeStopPlanning.length - 1 ].remove();

let removeNonFeatured = document.querySelectorAll('.posts h3').forEach(title => title.remove());
