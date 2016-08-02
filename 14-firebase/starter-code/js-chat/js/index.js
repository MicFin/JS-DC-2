// Model

var model = {
  loggedIn: true,
  user: {
    email: 'cool@example.com'
  },
  messages: {
    ab32cd4: {
      author: 'cool@example.com',
      text: 'Hello World!',
      upvotes: 0
    },
    kc4nd2dc: {
      author: 'neat@example.com',
      text: 'Foobar!',
      upvotes: 3
    }
  }
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
  renderChat();

  // TODO: Event Listeners
}


$(document).ready(setup);
