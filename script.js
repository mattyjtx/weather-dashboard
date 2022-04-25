var currentList = document.querySelector("ul");
var searchButton = document.getElementById("searchBtn");
var showCityEl = document.querySelector(".city");
var showDateEl = document.querySelector(".date");

var showTempEl = document.querySelector(".temp");
var showWindEl = document.querySelector(".wind");
var showHumidityEl = document.querySelector(".humidity")

var cityNameEl = document.getElementById("cityName");

var dailyTempEl = document.querySelector(".daily-temp");
var dailyTempEl1 = document.querySelector(".daily-temp1");
var dailyTempEl2 = document.querySelector(".daily-temp2");
var dailyTempEl3 = document.querySelector(".daily-temp3");
var dailyTempEl4 = document.querySelector(".daily-temp4");

var dailyWindEl = document.querySelector(".daily-wind");
var dailyWindEl1 = document.querySelector(".daily-wind1");
var dailyWindEl2 = document.querySelector(".daily-wind2");
var dailyWindEl3 = document.querySelector(".daily-wind3");
var dailyWindEl4 = document.querySelector(".daily-wind4");

var dailyHumidityEl = document.querySelector(".daily-humidity");
var dailyHumidityEl1 = document.querySelector(".daily-humidity1");
var dailyHumidityEl2 = document.querySelector(".daily-humidity2");
var dailyHumidityEl3 = document.querySelector(".daily-humidity3");
var dailyHumidityEl4 = document.querySelector(".daily-humidity4");

function getApi() {
  var cityName = cityNameEl.value;

  var url1 =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&units=imperial&appid=a2eb597d271dbead6179a99d9d6c31da";

  

  fetch(url1)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      showCityEl.textContent = data.name;
      showDateEl.textContent = data.date;
      showTempEl.textContent = data.main.temp + '°c';
      showWindEl.textContent = data.wind.speed  + 'mph';
      showHumidityEl.textContent = data.main.humidity + '%';
      
      console.log(data);

      var url2 = "https://api.openweathermap.org/data/2.5/onecall?lat="+ data.coord.lat +"&lon="+ data.coord.lon +"&appid=a2eb597d271dbead6179a99d9d6c31da&units=imperial"

      fetch(url2)
        .then(function (response) {

          return response.json();

        })
        .then(function (data) {
          dailyTempEl.textContent = data.daily[0].temp.day + '°c';
          dailyTempEl1.textContent = data.daily[1].temp.day + '°c';
          dailyTempEl2.textContent = data.daily[2].temp.day + '°c';
          dailyTempEl3.textContent = data.daily[3].temp.day + '°c';
          dailyTempEl4.textContent = data.daily[4].temp.day + '°c';

          dailyWindEl.textContent = data.daily[0].wind_speed + 'mph';
          dailyWindEl1.textContent = data.daily[1].wind_speed + 'mph';
          dailyWindEl2.textContent = data.daily[2].wind_speed + 'mph';
          dailyWindEl3.textContent = data.daily[3].wind_speed + 'mph';
          dailyWindEl4.textContent = data.daily[4].wind_speed + 'mph';

          dailyHumidityEl.textContent = data.daily[0].humidity + '%';
          dailyHumidityEl1.textContent = data.daily[1].humidity + '%';
          dailyHumidityEl2.textContent = data.daily[2].humidity + '%';
          dailyHumidityEl3.textContent = data.daily[3].humidity + '%';
          dailyHumidityEl4.textContent = data.daily[4].humidity + '%';
          

          console.log(data); // data back from last API
          // everything else goes in here

        });
    });
}

searchButton.addEventListener("click", getApi);
