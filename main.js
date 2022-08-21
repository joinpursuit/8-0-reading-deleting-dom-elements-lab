document.querySelector("li").remove();
document.querySelector("span").remove();
document.querySelector("main .posts article").remove();
const titles = document.querySelectorAll("main .posts h3");
titles.forEach(t => t.remove())






/*Instructions
Begin by creating a main.js file. Then, connect that file to the index.html file.

To complete the tests in this lab, you will need to remove a number of elements from the page using JavaScript. You should not edit the HTML at all to get the tests to pass. If you're unclear about any of the instructions below, remember that you can check the test file to see what exactly is being tested.

 Remove the "All Posts" link from the header.

 Remove the span element that contains the "Read Time" in the featured post. The featured post is the first post on the page.

 Remove the last post from the page, titled "Stop Planning".
 
 Remove all titles from all non-featured posts. */