const rem1 = document.querySelector(" li ")
rem1.remove()

const rem2 = document.querySelector("span")
rem2.remove()

const rem3 = document.querySelectorAll("article")
rem3[2].remove()

const rem4 = document.querySelectorAll("h3")
rem4.forEach((title) => {
    title.remove()
})