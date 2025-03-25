const apiKey = "IY0zxThbuhdxnRLq0oQ5ZEuS3MQXgiIs";

async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    const apiUrl = `https://api.tomorrow.io/v4/weather/realtime?location=${city}&units=metric&apikey=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        console.log(data); // Debugging output

        if (data.code) {
            alert("Error fetching weather data: " + data.message);
            return;
        }

        // Extract necessary weather data
        const weatherInfo = data.data.values;
        const temp = weatherInfo.temperature;
        const condition = weatherInfo.weatherCode;
        const humidity = weatherInfo.humidity;
        const windSpeed = weatherInfo.windSpeed;

        // Display data in HTML
        document.getElementById("cityName").innerText = `Weather in ${city}`;
        document.getElementById("temperature").innerText = `Temperature: ${temp}°C`;
        document.getElementById("description").innerText = `Condition: ${condition}`;
        document.getElementById("humidity").innerText = `Humidity: ${humidity}%`;
        document.getElementById("windSpeed").innerText = `Wind Speed: ${windSpeed} m/s`;

    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Something went wrong! Try again later.");
    }
}

// DARK MODE FUNCTIONALITY
document.getElementById("toggleDarkMode").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// APPLY DARK MODE ON PAGE LOAD
window.onload = function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
};