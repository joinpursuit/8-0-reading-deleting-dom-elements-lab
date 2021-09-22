document.querySelector('header nav ul li').remove();
document.querySelector('.featured span').remove();
document
  .querySelectorAll('.posts article')
  .forEach((e, i, a) =>
    i === a.length - 1 ? e.remove() : e.children[1].remove()
  );
