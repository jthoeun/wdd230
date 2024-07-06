function showGoldMembers() {
    const companiesData = fetch('https://jthoeun.github.io/wdd230/chamber/data/members.json') // Replace with the path to your JSON file
        .then(response => response.json())
        .then(data => data.companies);

    companiesData.then(companies => {
        const goldMembers = companies.filter(company => company.membershipLevel === "Gold");

        // Update your HTML with the filtered companies
        const goldMemberList = document.getElementById("gold-members");
        goldMemberList.innerHTML = ""; // Clear existing content

        goldMembers.forEach(member => {
            const memberElement = document.createElement("li"); // Create list item for each member
            memberElement.innerHTML = `
          <img src="${member.imageurl || member.image}" alt="${member.name} Logo">  
          <h3>${member.name}</h3>
          `;
            goldMemberList.appendChild(memberElement);
        });
    });
}

// Call the function to display gold members
showGoldMembers();

