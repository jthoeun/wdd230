const apiKey = 'c320cb52ba7b0400c1cdb3fecf2d6403';
const latitude = 20.4217;
const longitude = -86.9195;

// Function to fetch current weather data
async function getCurrentWeather() {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  // Extract and display current temperature, humidity, weather description, and icon
  const currentTemp = data.main.temp;
  const currentHumidity = data.main.humidity;
  const weatherDescription = data.weather[0].description.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  const weatherIcon = data.weather[0].icon;

  // Create image element
  const iconImg = document.createElement('img');
  iconImg.src = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

  // Create h2 element for current weather
  const currentWeatherH2 = document.createElement('h2');
  currentWeatherH2.textContent = 'Current Weather';

  // Display data in the #current-weather div
  document.getElementById('current-weather').innerHTML = `
    <h2>Current Weather</h2>
    <img src="http://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="Weather Icon">
    <p> ${weatherDescription} - ${currentTemp} °C Humidity: ${currentHumidity} %</p>
    
  `;
}

// Function to fetch forecast data
async function getForecastWeather() {
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  // Find the forecast for the next day at 15:00 (3 PM)
  const nextDayForecast = data.list.find(item => {
    const forecastDate = new Date(item.dt * 1000); // Convert timestamp to date
    return forecastDate.getHours() === 15 && forecastDate.getDate() === new Date().getDate() + 1;
  });

  // Extract and display forecast temperature and weather icon
  const forecastTemp = nextDayForecast.main.temp;
  const forecastIcon = nextDayForecast.weather[0].icon;

  // Create image element
  const forecastIconImg = document.createElement('img');
  forecastIconImg.src = `http://openweathermap.org/img/wn/${forecastIcon}@2x.png`;

  // Create h2 element for forecast weather
  const forecastWeatherH2 = document.createElement('h2');
  forecastWeatherH2.textContent = 'Forecast';

  // Display data in the #forecast-weather div
  document.getElementById('forecast-weather').innerHTML = `
    <h2>Next Day Forecast</h2>
    <img src="http://openweathermap.org/img/wn/${forecastIcon}@2x.png" alt="Forecast Icon">
    <p>Temperature at 3 PM: ${forecastTemp} °C</p>
  `;
}

// Call functions to fetch and display data
getCurrentWeather();
getForecastWeather();
