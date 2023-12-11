const books = document.querySelector("img")
const ogSrc = books.getAttribute("src")

books.onclick = () => {
    const imgSrc = books.getAttribute("src")

    if (imgSrc === ogSrc) {
        books.setAttribute("src", "./images/rtr-z5567.png")
    } else {
        books.setAttribute("src", ogSrc)
    }
};