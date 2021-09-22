const altPostLink = document.getElementsByTagName("li")[0].remove();

const altPostLinks = document.getElementsByTagName("span")[0].remove();

const selector = document.querySelector(".posts").lastElementChild.remove();

const deleteTitle = document.querySelectorAll("h3");
for (let title of deleteTitle){
   title.remove();
}