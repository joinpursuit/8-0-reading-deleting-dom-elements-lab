///////////Removes ALL Posts Link
let allPosts = document.querySelector("nav ul li");
allPosts.remove();
///////////Removes ALL Posts Link

///////////Removes Read Time Span
let readTimeSpan = document.querySelector(".featured span");
readTimeSpan.remove();
///////////Removes Read Time Span

///////////Removes Last Post 
let stopPlanningPost = document.querySelectorAll(".posts article");
stopPlanningPost[2].remove();
///////////Removes Last Post 

///////////Removes Titles from non featured posts 
let h3Titles = document.querySelectorAll(".posts h3");
for(let el of h3Titles){  //Use for loop to loop through each title in the node list to remove.
    el.remove();
}
///////////Removes Titles from non featured posts 