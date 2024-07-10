const apiKey = '2aae00ad12260d26b117adc54403b640';

$(document).ready(function () {
  weatherFn('LUCKNOW');
});

async function weatherFn(cName) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cName}&appid=${apiKey}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (res.ok) {
      weatherShowFn(data);
    } else {
      alert('City not found. Please try again.');
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

function weatherShowFn(data) {
  $('#city-name').text(data.name);
  $('#date').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
  $('#temperature').html(`${data.main.temp}°C`);
  $('#description').text(data.weather[0].description);
  $('#wind-speed').html(`Wind Speed: ${data.wind.speed} m/s`);
  const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  $('#weather-icon').attr('src', iconUrl);
  $('#weather-info').fadeIn();
}