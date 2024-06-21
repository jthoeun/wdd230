const linksURL = "https://jthoeun.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        // Fetch the JSON data
        const response = await fetch(linksURL);
        const data = await response.json();

        // Call the function to display links
        displayLinks(data.lessons);
    } catch (error) {
        console.error('Error fetching the links:', error);
    }
}

function displayLinks(lessons) {
    const linksContainer = document.querySelector('#linksContainer');
    linksContainer.innerHTML = ''; // Clear existing content

    lessons.forEach(lesson => {
        const lessonElement = document.createElement('div');
        lessonElement.classList.add('week');

        const lessonTitle = document.createElement('ol');
        lessonTitle.textContent = `Week ${lesson.lesson}`;
        lessonElement.appendChild(lessonTitle);

        const linksList = document.createElement('ul');

        lesson.links.forEach(link => {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = `${link.url}`;
            anchor.textContent = link.title;
            listItem.appendChild(anchor);
            linksList.appendChild(listItem);
        });

        lessonElement.appendChild(linksList);
        linksContainer.appendChild(lessonElement);
    });
}

getLinks();