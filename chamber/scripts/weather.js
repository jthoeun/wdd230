const forecastContainer = document.querySelector('#forecast-container');

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=42.92&lon=-114.94&units=imperial&appid=c320cb52ba7b0400c1cdb3fecf2d6403'; // Replace with your own API key

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    // 3-Day Forecast with Dates and Capitalized Descriptions
    const forecastList = data.list.slice(1, 4); // Get data for next 3 days (excluding current day)
    forecastContainer.innerHTML = ""; // Clear container before adding forecast

    forecastList.forEach(day => {
        const temp = day.main.temp;
        const description = day.weather[0].description.charAt(0).toUpperCase() +
            day.weather[0].description.slice(1); // Capitalize first letter

        // Get date object for the forecast day
        const forecastDate = new Date(day.dt * 1000); // Convert timestamp to milliseconds

        const forecastItem = document.createElement('div'); // Create forecast item element
        forecastItem.classList.add('forecast-item'); // Add class for styling (optional)

        // Format the date (e.g., "Thu, 27 Jun") using options for month, day, and weekday
        const formattedDate = forecastDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

        forecastItem.innerHTML = `
        <p>${formattedDate}</p>
        <p>${temp.toFixed(0)}&deg;F</p>
        <p>${description}</p>
      `;
        forecastContainer.appendChild(forecastItem); // Add item to forecast container
    });
}

apiFetch();
