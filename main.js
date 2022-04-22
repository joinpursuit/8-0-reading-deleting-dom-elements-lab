// // remove all post element from header
const removeAllPostDeHeader = document.querySelector('header nav ul li');
removeAllPostDeHeader.remove();

// // // remove read time from span
const removeSpanDeReadTime = document.querySelector('article aside p');
removeSpanDeReadTime.remove();

// //remove the last post
const removeLastP = document.querySelector('main .posts article');
removeLastP.remove()

// // // remove All title for post
// // const removeAllTitles = document.quearySelectorAll('main .posts h3');
// // removeAllTitles.remove(); not sure why I'm failing the last test.