document.addEventListener("DOMContentLoaded", function () {
    getWeather("chennai");
});

document.querySelector("#search").addEventListener("click", function () {
    let textinput = document.getElementById('textinput')
    let city = textinput.value.trim()

    getWeather(city)
    textinput.value = ""
})

    function getWeather(city) {
        let cityname = document.querySelector("#cityname")
        let temperature = document.querySelector("#temp")
        let humidity = document.querySelector("#humidity")
        let wind = document.querySelector("#wind")


        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=78064aa3ba1289e857ca8d7bd56ecac7`)
            .then(res => res.json())
            .then(data => {
                if (data.cod === "404") {
                    alert("City not found. Please try again.");
                    return;
                }

                const temp = Math.floor(data.main.temp);
                const humi = data.main.humidity;
                const windSpd = data.wind.speed;

                cityname.textContent = data.name
                temperature.textContent = `${temp}°C`;
                humidity.textContent = `${humi}%`;
                wind.textContent = `${windSpd} m/s`;

            })
            .catch(error => {
                console.error("Error:", error);
                alert("Something went wrong. Please try again.")
            })
}


