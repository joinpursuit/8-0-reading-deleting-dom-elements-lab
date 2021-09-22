document.querySelector("span").remove()
document.querySelector("li").remove()

const removeH3 = document.querySelectorAll("main .posts article");
for (let rem of removeH3) {
    if (rem.textContent.includes("Stop Planning")){
        rem.remove();
    }
};

document.querySelectorAll("main .posts h3").forEach(header => header.remove())

