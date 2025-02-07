const apiKey = "IY0zxThbuhdxnRLq0oQ5ZEuS3MQXgiIs"; 
const city = "Berhampore"; 

async function getWeather() {
    const apiUrl = `https://api.tomorrow.io/v4/weather/forecast?location=${city}&units=metric&timesteps=1h&apikey=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        console.log(data); 

        if (data.code) {
            alert("Error fetching weather data: " + data.message);
            return;
        }

       
        const weatherInfo = data.timelines.hourly[0]; 
        const temp = weatherInfo.values.temperature;
        const condition = weatherInfo.values.weatherCode;
        const humidity = weatherInfo.values.humidity;
        const windSpeed = weatherInfo.values.windSpeed;

      
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

document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

window.onload = function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
};

