document.querySelector("nav ul li").remove();

document.querySelector(".featured span").remove();

document.querySelector("main .posts article").remove();

document.querySelectorAll("main .posts h3").forEach((title) => {
    title.remove();
});

