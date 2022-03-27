//const upAnchor = document.querySelector('header li');
//upAnchor.remove("All posts");

document.querySelector('li').remove();

//const spanner = document.querySelector('span');
//spanner.remove("Read Time");

document.querySelector('article span').remove();


//const eraseLastPost = document.querySelector('main .posts article');
//eraseLastPost.remove("Stop Planning");
const subPosts = document.querySelectorAll('.posts article');
subPosts[subPosts.length-1].remove();

let titleWave = document.querySelectorAll('main .posts h3');
titleWave.forEach((title) => {
    title.remove(title);
});