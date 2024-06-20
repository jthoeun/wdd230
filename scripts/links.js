const baseURL = "https://jthoueun.github.io/wdd230/";
const linksURL = "https://jthoeun.github.io/wdd230/data/links.json";
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}
function displayLinks(data) {
    let li = document.createElement("li");
    li.textContent = `${data.lesson}: `;

    data.links.forEach(link => {

        let a = document.createElement("a");

        a.setAttribute("href", link.url);
        a.textContent = `${link.title}| `;
        li.appendChild(a);
    });

    listEl.appendChild(li);
};

getLinks();