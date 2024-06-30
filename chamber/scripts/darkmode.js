const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const main = document.querySelector("main");
const header = document.querySelector("header")
const footer = document.querySelector("footer");
const nav = document.querySelector("nav, ul,li");
const banner = document.querySelector("banner")

modeButton.addEventListener("click", () => {
    body.classList.toggle('dark-mode');
    main.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    nav.classList.toggle('dark-mode');
    banner.classList.toggle('dark-mode')

});