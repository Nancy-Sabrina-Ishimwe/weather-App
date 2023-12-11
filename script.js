
async function getWeather(){
    var res = await fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon=london&appid=77b551fe2297c66195e5d34f598a48ad&units=metric');
    var data = await res.json();
    console.log(data);
    document.querySelector('.celcius').innerHTML = data.main.temp;
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidityP').innerHTML = data.main.humidity;
    document.querySelector('.windS').innerHTML = data.wind.speed;
        }

        getWeather();