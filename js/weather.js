const API_key = "86bec6dcc78ff4dbe259d536c80cbd63";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(lat,lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_key}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weatherSpan1 = document.querySelector("#weather span:first-child");
        const weatherSpan2 = document.querySelector("#weather span:last-child");
        console.log(data.sys.country, data.weather[0].main);
        weatherSpan1.innerText = data.sys.country;
        weatherSpan2.innerText = data.weather[0].description;
        console.log(data.sys.country, data.weather[0].main);
    });
}

function onGeoError(){
    alert("Can`t find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);