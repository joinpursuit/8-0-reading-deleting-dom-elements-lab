let removeAllPosts = document.querySelector('li');
removeAllPosts.remove();

let removeReadTimeSpan = document.querySelector('span');
removeReadTimeSpan.remove();

let removeLastPost = document.querySelector('.posts article:last-child');
removeLastPost.remove();

let removeTitles = document.querySelectorAll('.posts h3')
removeTitles.forEach(title => title.remove())

