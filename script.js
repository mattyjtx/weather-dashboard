var currentList = document.querySelector('ul');
var searchButton = document.getElementById('.button');

var cityName = document.getElementsByClassName('name');

function getApi() {
  
  var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=a2eb597d271dbead6179a99d9d6c31da";

  fetch(requestUrl)
  .then(function (response) {
      return response.json();
  })
  .then(function (data) {
      console.log(data);
  })
};


getApi();