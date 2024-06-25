const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDec = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&&units=imperial&appid=c320cb52ba7b0400c1cdb3fecf2d6403';

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
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDec.textContent = `${desc}`;
}
