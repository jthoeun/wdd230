const url = "https://jthoeun.github.io/wdd230/chamber/data/members.json"
const card = document.querySelector('#cards');

async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCompany(data.companies);

}

getCompanyData(); // Assuming this function fetches the company data

const displayCompany = (companies) => {
    companies.forEach((company) => { // Use singular 'company' for clarity

        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let companyName = document.createElement('h3'); // fill in the blank
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let website = document.createElement('p');
        let membership = document.createElement('p');


        companyName.textContent = `${company.name}`;

        // Address
        const { street, city, state, zip } = company.address; // Destructuring for cleaner address logic
        address.textContent = `${street}, ${city}, ${state} ${zip}`;  // Access individual address properties

        // Build the image portrait by setting all the relevant attributes
        logo.setAttribute('src', company.imageurl);
        logo.setAttribute('alt', `logo of ${company.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '340');
        logo.setAttribute('height', '440');

        website.textContent = `${company.website}`;

        membership.textContent = `Membership: ${company.membershipLevel}`

        // Append the section(card) with the created elements
        card.appendChild(companyName); //fill in the blank
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(website);
        card.appendChild(membership);


        cards.appendChild(card);
    }); // end of arrow function and forEach loop
};
