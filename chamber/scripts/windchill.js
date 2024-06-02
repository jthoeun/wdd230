function getWindChill() {
    // Get temperature and wind speed elements from the page
    const tempElement = document.getElementById("currenttemp"); // Assuming element ID for temperature
    const windSpeedElement = document.getElementById("windspeed"); // Assuming element ID for wind speed

    // Check if elements exist
    if (!tempElement || !windSpeedElement) {
        console.error("Error: Could not find temperature or wind speed elements.");
        return;
    }

    // Get temperature and wind speed values
    const temp = parseFloat(tempElement.textContent);
    const windSpeed = parseFloat(windSpeedElement.textContent);

    // Check if values meet wind chill calculation limits
    if (temp > 50 || windSpeed <= 3.0) {
        displayWindChill("N/A"); // Not applicable
        return;
    }

    // Calculate wind chill using the National Weather Service formula (in Fahrenheit)
    const windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);

    // Display the calculated wind chill
    displayWindChill(windChill.toFixed(1)); // Round to one decimal place
}

function displayWindChill(windChillValue) {
    // Get the element where wind chill will be displayed (replace with your element ID)
    const windChillElement = document.getElementById("wind-chill");

    if (windChillElement) {
        windChillElement.textContent = `Wind Chill: ${windChillValue}°F`;
    } else {
        console.error("Error: Could not find wind chill display element.");
    }
}

// Call the function to get wind chill on page load (or on any event you prefer)
getWindChill();