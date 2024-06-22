const url = "https://jthoeun.github.io/wdd230/chamber/data/members.json"
const cards = document.querySelector('#cards');

async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCompany(data.companies);

}

getCompanyData();
const displayCompany = (companies) => {
    companies.forEach((companies) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let companyName = document.createElement('h2'); // fill in the blank
        let logo = document.createElement('img');
        let website = document.createElement('p')

        // Build the h2 content out to show the prophet's full name
        companyName.textContent = `${companies.name}`;

        // Build the image portrait by setting all the relevant attributes
        logo.setAttribute('src', logo);
        logo.setAttribute('alt', `logo of ${companies.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '340');
        logo.setAttribute('height', '440');

        website.textContent = `${companies.website}`;

        // Append the section(card) with the created elements
        card.appendChild(companyName); //fill in the blank
        card.appendChild(logo);

        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}