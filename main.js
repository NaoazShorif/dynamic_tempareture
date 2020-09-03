
const apiKey = 'b6cc4392568a3586e950307c86a22bbd';
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

const getWeatherData = city => {
    const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => getInformation(data))
}
const searchBtn = document.getElementById('btn');

const getInformation = data => {
    document.getElementById('city-name').innerText = data.name || "Unknown Location!";
    document.getElementById('tempareture-value').innerText = data.main.temp;
    document.getElementById('weather').innerText = data.weather[0].main;
    document.getElementById('image').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById('input-city').value = "";
}
searchBtn.addEventListener('click',() =>{
    const cityName = document.getElementById('input-city').value;
    getWeatherData(cityName);
});
