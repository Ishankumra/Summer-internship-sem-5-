const input = document.querySelector('.row input');
const button = document.querySelector('.row button');
const tempElem = document.getElementById('temp');
const humidityElem = document.querySelector('.col p span');
const windElem = document.querySelectorAll('.col')[1].querySelector('p span');
const weatherImg = document.querySelector('.container > img');

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'a34f570f97mshbad1c37043f10e0p13b105jsn1051851b09b4',
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
    }
};

async function getWeather(city) {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${encodeURIComponent(city)}`;
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            tempElem.textContent = 'Not found';
            return;
        }
        const data = await response.json();
        tempElem.textContent = `${data.current.temp_c}°C`;
        humidityElem.textContent = `${data.current.humidity}%`;
        windElem.textContent = `${data.current.wind_kph}`;
        weatherImg.src = data.current.condition.icon.startsWith('//') ? 'https:' + data.current.condition.icon : data.current.condition.icon;
    } catch (error) {
        tempElem.textContent = 'Error';
    }
}

// Default city on load
getWeather('London');

button.addEventListener('click', () => {
    const city = input.value.trim();
    if (city) {
        getWeather(city);
    }
});