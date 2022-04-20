var currentList = document.querySelector("ul");
var searchButton = document.getElementById("searchBtn");
var showCityEl = document.querySelector(".city");

var cityNameEl = document.getElementById("cityName");

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

      var url2 = "https://api.openweathermap.org/data/2.5/onecall?lat="+ data.coord.lat +"&lon="+ data.coord.lon +"&appid=a2eb597d271dbead6179a99d9d6c31da&units=imperial"

      fetch(url2)
        .then(function (response) {

          return response.json();

        })
        .then(function (data) {

          console.log(data); // data back from last API
          // everything else goes in here

        });
    });
}

searchButton.addEventListener("click", getApi);
