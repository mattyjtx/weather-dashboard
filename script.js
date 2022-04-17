var currentList = document.querySelector('ul');
var searchButton = document.getElementById('.button');

function getApi() {
  // replace `octocat` with anyone else's GitHub username
  var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=754f38cbb3735138d910d50a9de8ed09';

  fetch(requestUrl)
  .then(function (response) {
      return response.json();
  })
  .then(function (data) {
      console.log(data);
  })
};


getApi();