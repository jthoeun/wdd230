const apiKey = 'c320cb52ba7b0400c1cdb3fecf2d6403';
const chamberLocation = '83314';

const forecastContainer = document.getElementById('forecast-container');
const windSpeedSpan = document.getElementById('wind-speed');

function getWeatherData() {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${chamberLocation}&appid=${apiKey}&units=imperial`; // Changed units to imperial

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const forecast = data.list;
            let seenDates = new Set();
            let forecastHTML = '';
            let dayCount = 0;

            const today = new Date().toLocaleDateString('en-US', { day: 'numeric' });

            for (let i = 0; i < forecast.length && dayCount < 3; i++) {
                const day = forecast[i];
                const date = new Date(day.dt * 1000).toLocaleDateString('en-US', { day: 'numeric' });

                if (date !== today && !seenDates.has(date)) {
                    seenDates.add(date);
                    const formattedDate = new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
                    const temp = Math.round(day.main.temp);


                    const iconCode = day.weather[0].icon;
                    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
                    const description = day.weather[0].description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); // Capitalize each word

                    forecastHTML += `
            <div class="forecast-day">
              <p class="forecast-date">${formattedDate}</p>
              <img src="${iconUrl}" alt="${description}" />
              <p class="forecast-temp">${temp}°F - ${description}</p>
            </div>
          `;
                    dayCount++;
                }
            }

            forecastContainer.innerHTML = forecastHTML;
            windSpeedSpan.textContent = data.list[0].wind.speed + ' mph';
        })
        .catch(error => console.error(error));
}

getWeatherData();
