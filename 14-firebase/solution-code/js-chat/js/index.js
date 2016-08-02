// Model

var model = {
    messages: []
};

// View

// Compile the template outside of the function, so that we only do it once
// instead of on every render.

var template;
$(document).ready(function() {
    var templateSource = $('#chat-template').html();
    template = Handlebars.compile(templateSource);
});

function renderChat() {
    var chatHtml = template(model);
    $('#chat-log').html(chatHtml);
}

// Controller

function setup() {


    $('#registerForm').on('submit', handleRegister);
    $('#loginForm').on('submit', handleLogin);
}

function handleRegister(event) {
    event.preventDefault();

    var email = $('#registerForm input[name="email"]').val();
    var password = $('#registerForm input[name="password"]').val();

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(user) {
            console.log(user);
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
}

function handleLogin(event) {
    event.preventDefault();

    var email = $('#loginForm input[name="email"]').val();
    var password = $('#loginForm input[name="password"]').val();

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(user) {
            console.log(user);
        })
        .catch(function(error) {
            console.log(error);
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
}

$(document).ready(setup);
