$(document).ready(function() {

  // Model

  var model = {
    photos: undefined,
    loggedIn: false
  };

  // View

  function renderLoggedIn() {
    var templateSource = $('#login-template').html();
    var template = Handlebars.compile(templateSource);
    var renderedTemplate = template(model);

    $('#loginForm').html(renderedTemplate);
  }

  function renderLandscapes() {
    var templateSource = $('#landscapes-template').html();
    var template = Handlebars.compile(templateSource);
    var renderedTemplate = template(model);

    $('#landscapes').html(renderedTemplate);
  }

  // Controller

  function setup() {
    renderLoggedIn();

    // Initialize the client
    _500px.init({
      sdk_key: '3176d39dfc684b08771524ec26c20cf35f388ffd'
    });

    // If the user clicks the login link, log them in
    $('#login').click(function(event) {
      event.preventDefault();
      _500px.login();
    });

    // If the user has already logged in & authorized your application, this will fire an 'authorization_obtained' event
    // This keeps the site from prompting the user to log in each time the page is refreshed
    _500px.getAuthorizationStatus();

    // When a successful login to 500px is made, they fire off the 'authorization_obtained' event
    _500px.on('authorization_obtained', loadPhotos);
  }

  function loadPhotos() {
    // Update logged in model
    model.loggedIn = true;
    // Render logged in view
    renderLoggedIn();
    // Render the landscapes view to show the loading screen
    renderLandscapes();

    // check if navigator geolocation is available from the browser
    if (navigator.geolocation) {
      // if it is use the getCurrentPosition method to retrieve the Window's location
      navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        console.log('lat: ', lat);
        console.log('long: ', long);

        // Feel free to adjust the search radius as you see fit
        var radius = '25mi';

        var searchOptions = {
          geo: lat + ',' + long + ',' + radius,
          only: 'Landscapes', // We only want landscape photos
          image_size: 3, // This isn't neccessary but by default the images are thumbnail sized
          rpp: 28,  // Return 28 results
          sort: 'highest_rating'  // Sort results by highest rated
        };

        // Now that we have the user's location, let's search the API for landscape photos nearby
        _500px.api('/photos/search', searchOptions, handleResponse);
      });
    }
  }

  function handleResponse(response) {
    // Update model
    model.photos = response.data.photos;

    // Render View
    renderLandscapes();
  }

  setup();
});
