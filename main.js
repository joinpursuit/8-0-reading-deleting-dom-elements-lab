//obtained elements to remove
const childElToRemove = document.getElementsByTagName("li")[0];
childElToRemove.parentNode.removeChild(childElToRemove);

const childSpanElToRemove = document.getElementsByTagName("span")[0];
childSpanElToRemove.parentNode.removeChild(childSpanElToRemove);

const lastSectionPost = document.querySelector(".posts").lastElementChild;
lastSectionPost.parentNode.removeChild(lastSectionPost);

const TitlesToRemove = document.getElementsByTagName("h3");
//iterated through HTML Collection in other to remove h3 element from each article
for (let i = TitlesToRemove.length - 1; TitlesToRemove.length > 0; i--) {
  TitlesToRemove[i].parentNode.removeChild(TitlesToRemove[i]);
}
