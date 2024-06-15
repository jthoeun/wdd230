document.getElementById("copyright-year").innerHTML = new Date().getFullYear();

let text = document.lastModified;
document.getElementById("modified").innerHTML = text;
const currentTimeInput = document.getElementById("currentTime");
currentTimeInput.value = Date.now();

const myForm = document.getElementById("form");

form.addEventListener("submit", function (event) {
    console.log("Form submitted with current time:", currentTimeInput.value);
});