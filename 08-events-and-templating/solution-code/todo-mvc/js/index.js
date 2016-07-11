// Model
var todos = [
  {
    text: 'Hello',
    completed: false
  },
  {
    text: 'World',
    completed: false
  }
];

// View

function render() {
  $('#todoList').html('');
  $('#todoInput').val('');
  var source = $('#to-do-template').html();
  var template = Handlebars.compile(source);

  for (var i = 0; i < todos.length; i++) {
    var li = template(todos[i]);
    $('#todoList').append(li);
  }
}

// Controller

function setup() {
  // Setup the styles
  render();

  // Setup the event listeners
  $('#todoList').on('click', '.complete', markCompleted);
  $('#todoList').on('click', '.delete', deleteTodo);
  $('#submit').on('click', addTodo);
}

function markCompleted() {
  var todoIndex = $(this).parent().index();
  todos[todoIndex].completed = true;

  render();
}

function deleteTodo() {
  var todoIndex = $(this).parent().index();
  todos.splice(todoIndex, 1);

  render();
}

function addTodo() {
  todos.push({
    text: $('#todoInput').val(),
    completed: false
  });

  render();
}

$(document).ready(setup);
