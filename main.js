/*- [ ] Remove the "All Posts" link from the header.
- [ ] Remove the `span` element that contains the "Read Time" in the featured post. The featured post is the first post on the page.
- [ ] Remove the last post from the page, titled "Stop Planning".
- [ ] Remove all titles from all non-featured posts.
 */

const post = document.querySelector('nav li')
//  console.log(post)
 post.remove()


 const span = document.querySelector('span')
//  console.log(span)
span.remove()

 const last = document.querySelector('main .posts article')
//  console.log(last)
last.remove()


 const title = document.querySelectorAll('main .posts h3')
//  console.log(titles)
title.forEach((titles) => titles.remove())