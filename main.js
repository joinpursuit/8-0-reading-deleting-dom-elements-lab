let removeItem = document.querySelector('li')
removeItem.remove();

removeItem = document.querySelector('span')
removeItem.remove();

removeItem = document.querySelector('main .posts article');
removeItem.remove();

removeItem = document.querySelectorAll('main .posts h3');

removeItem.forEach( item => {
    item.remove();

})

