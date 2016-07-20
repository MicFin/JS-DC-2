# LocalLandscapes

We are going to create an application that will show a user pictures of landscapes near them using JavaScripts `geolocation` API and the `500px` HTTP API.

## [`geolocation`](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation)

The `geolocation` API allows us to get the user's latitude and longitude. We can use this to send to 500px.

## [500px](https://github.com/500px/500px-js-sdk)

500px is a complex, OAuth using HTTP API. Luckily, it provides a custom JavaScript client library that allows us to easily interact with it.

## Getting Started

- The starter code includes the 500px JS file from the custom client and it also includes a "callback.html" file that comes from the 500px SDK. The callback.html file allows us to do OAuth for our application.

- The starter code also uses Bootstrap to style to page and loads the Bootstrap CSS.

- In order to begin using the 500px API, we'll need to sign up for 500px and register an application.

- We also need to run our site using the `http://` protocol instead of the `file:///` protocol. We can do this by running a local node file server. To do this:
  - Install http-server module `npm install -g http-server`
  - Run a server on port 3000 from the project directory `http-server -p 3000`
