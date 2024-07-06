const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDec = document.querySelector('#weather-desc');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=42.93&lon=-114.71&&units=imperial&appid=c320cb52ba7b0400c1cdb3fecf2d6403';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
apiFetch();

function displayResults(data) {
    const tempWithoutDecimals = data.main.temp.toFixed(0);
    currentTemp.innerHTML = `${tempWithoutDecimals}&deg;F`;
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const capitalizedDesc = data.weather[0].description.charAt(0).toUpperCase() +
        data.weather[0].description.slice(1);
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', capitalizedDesc);
    captionDec.textContent = capitalizedDesc;
}