const url = 'data/rental.json';

fetch(url)
    .then(response => response.json())
    .then(data => {
        const rentalData = data;

        function createCard(rental) {
            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
            <img src="images/${rental.image}" alt="${rental.type}">
            <h2>${rental.type}</h2>
            <p>Max Persons: ${rental.maxPersons}</p>
            <table>
                <thead>
                    <tr>
                        <th>Length</th>
                        <th>Reservation</th>
                        <th>Walk-In</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Half Day</td>
                        <td>${rental.reservation.halfDay}</td>
                        <td>${rental.walkIn.halfDay}</td>
                    </tr>
                    <tr>
                        <td>Full Day</td>
                        <td>${rental.reservation.fullDay}</td>
                        <td>${rental.walkIn.fullDay}</td>
                    </tr>
                </tbody>
            </table>
        `;

            return card;
        }

        function displayVehicles() {
            const vehicleCards = document.getElementById('vehicle-cards');

            rentalData.rentals.forEach(rental => {
                const card = createCard(rental);
                vehicleCards.appendChild(card);
            });
        }

        displayVehicles();
    });