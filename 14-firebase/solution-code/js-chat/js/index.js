// Model

var model = {
  loggedIn: false,
  user: undefined,
  messages: {}
};

// View

var chatTemplate;
var formTemplate;
function compileTemplates() {
  var templateSource = $('#chat-template').html();
  chatTemplate = Handlebars.compile(templateSource);

  var formTemplateSource = $('#form-template').html();
  formTemplate = Handlebars.compile(formTemplateSource);
}

function renderChat() {
  var chatHtml = chatTemplate(model);
  $('#chatLog').html(chatHtml);
}

function renderForm() {
  var formHtml = formTemplate(model);
  $('#formContainer').html(formHtml);
}

// Controller

function setup() {
  compileTemplates();
  renderForm();

  $('#formContainer').on('click', '#register', handleRegister);
  $('#formContainer').on('click', '#login', handleLogin);
  firebase.auth().onAuthStateChanged(handleAuthStateChange);
  $('#formContainer').on('click', '#comment', addMessage);
  $('#formContainer').on('click', '#signOut', handleSignOut);
  $('#chatLog').on('click', '.upvote', handleUpvote);
  $('#chatLog').on('click', '.delete', handleDelete);
}

// Auth

function handleRegister() {
  var email = $('input[name="email"]').val();
  var password = $('input[name="password"]').val();

  firebase.auth().createUserWithEmailAndPassword(email, password);
}

function handleLogin() {
  var email = $('input[name="email"]').val();
  var password = $('input[name="password"]').val();

  firebase.auth().signInWithEmailAndPassword(email, password);
}

function handleSignOut() {
  firebase.auth().signOut();
}

function handleAuthStateChange() {
  var user = firebase.auth().currentUser;

  if (user) {
    model.user = user;
    model.loggedIn = true;
    firebase.database().ref('messages').on('value', getMessages);
  } else {
    model.user = undefined;
    model.loggedIn = false;
    model.messages = [];
  }

  renderForm();
  renderChat();
}

// CRUD

// Create

function addMessage() {
  var messagesDB = firebase.database().ref('messages');
  var messageText = $('textarea[name="message"]').val();
  $('textarea[name="message"]').val('');
  messagesDB.push({
    author: model.user.email,
    text: messageText,
    upvotes: 0
  });
}

// Read

function getMessages(snapshot) {
  model.messages = snapshot.val();

  renderChat();
}

// Update

function handleUpvote() {
  var messageId = $(this).parent().attr('data-id');
  var upvotes = model.messages[messageId].upvotes;
  var newUpvotes = upvotes !== undefined ? upvotes + 1 : 0;
  var updates = {
    upvotes: newUpvotes
  };
  firebase.database().ref('messages/' + messageId).update(updates);
}

// Delete

function handleDelete() {
  var messageId = $(this).parent().attr('data-id');
  firebase.database().ref('messages/' + messageId).remove();
}

$(document).ready(setup);
