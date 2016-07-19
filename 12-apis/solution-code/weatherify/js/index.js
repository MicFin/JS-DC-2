// Model

var weather = {
  city: '',
  country: '',
  temperature: '',
  description: '',
  humidity: '',
  clouds: ''
};

// View

// Compile the template outside of the function, so that we only do it once
// instead of on every render.

var template;
$(document).ready(function() {
  var templateSource = $('#weather-template').html();
  template = Handlebars.compile(templateSource);
});

function renderWeather() {
  var weatherHtml = template(weather);
  $('#weather').html(weatherHtml);
}

// Controller

$(document).ready(function() {
  // First render
  renderWeather();

  // Setup Listeners
  $('#searchForm').on('submit', function(event) {
    event.preventDefault();

    // Get the values enetered by the user
    var city = $('input[name="city"]').val();
    var country = $('input[name="country"]').val();

    // Make the request to OpenWeatherMap API
    $.ajax({
      type: 'GET',
      url: buildURL(city, country),
      success: function (data) {

        // Update the model
        weather.city = city;
        weather.country = country,
        weather.temperature = data.main.temp;
        weather.description = data.weather[0].description;
        weather.humidity = data.main.humidity;
        weather.clouds = data.clouds.all;

        // Rerender the View
        renderWeather();
      }
    })
  });

});

// Utils

function buildURL(city, country) {
  var baseURL = 'http://api.openweathermap.org/data/2.5/weather?';
  baseURL += 'APPID=2664638114eda67ca032c814acc2b9b4';
  baseURL += '&units=imperial';
  baseURL += '&q=' + city + ',' + country;

  return baseURL;
}
