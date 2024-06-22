const url = "https://jthoeun.github.io/wdd230/chamber/data/members.json"
const card = document.querySelector('#cards');

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
        let companyName = document.createElement('h3'); // fill in the blank
        let logo = document.createElement('img');
        let address = document.createElement('p')
        let website = document.createElement('p')

        // Build the h2 content out to show the prophet's full name
        companyName.textContent = `${companies.name}`;

        //Address
        address.textContent = `${companies.address}`;

        // Build the image portrait by setting all the relevant attributes
        logo.setAttribute('src', companies.imageurl);
        logo.setAttribute('alt', `logo of ${companies.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '340');
        logo.setAttribute('height', '440');

        website.textContent = `${companies.website}`;

        // Append the section(card) with the created elements
        card.appendChild(companyName); //fill in the blank
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(website);

        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}