function getWindChill() {
    const tempElement = document.getElementById("current-temp");
    const windSpeedElement = document.getElementById("wind-speed");
    if (!tempElement || !windSpeedElement) {
        console.error("Error: Could not find temperature or wind speed elements.");
        return;
    }
    const temp = parseFloat(tempElement.textContent);
    const windSpeed = parseFloat(windSpeedElement.textContent);
    if (temp > 50 || windSpeed <= 3.0) {
        displayWindChill("N/A");
        return;
    }
    const windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);

    displayWindChill(windChill.toFixed(1));
}

function displayWindChill(windChillValue) {
    const windChillElement = document.getElementById("wind-chill");

    if (windChillElement) {
        windChillElement.textContent = `Wind Chill: ${windChillValue}°F`;
    } else {
        console.error("Error: Could not find wind chill display element.");
    }
}
getWindChill();