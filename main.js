/*let link = document.querySelector('a');
console.log(`1st link: ${link}`);
console.log(link);
link.remove(); */

let list = document.querySelector('li');
console.log(`1st list: ${list}`);
console.log(list);
list.remove();

let span = document.querySelector('span');
console.log(`1st span: ${span}`);
console.log(span);
span.remove();

let articles = document.getElementsByClassName('posts');
for (let art of articles) {
  art.lastElementChild.remove();
}

console.log(articles);

let header = document.querySelectorAll('.posts h3');
header.forEach((head) => {
  console.log(head);
  head.remove();
});
