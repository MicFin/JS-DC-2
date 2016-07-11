// V1.

// $('li').css('color', 'blue');
// $('li:first-child').css('font-weight', 'bold');
// $('h1').text('TODO');
// $('h1').after('<input id="todo" type="text"><button id="submit">Submit</button>');


// V2.
function setup() {
  // Setup the styles
  $('li').css('color', 'blue');
  $('li:first-child').css('font-weight', 'bold');
  $('h1').text('TODO');
  $('h1').after('<input id="todo" type="text"><button id="submit">Submit</button>');

  // Setup the event listeners
  $('ul').on('click', 'li', markCompleted);
  $('#submit').on('click', addTodo);
}

function markCompleted() {
  $(this).css('text-decoration', 'line-through');
}

function addTodo() {
  var todo = $('#todo').val();
  var li = $('<li>').html(todo);
  // If we listen to li's directly, this is necessary
  // li.on('click', markCompleted);
  $('ul').prepend(li);
  $('#todo').val('');
}

$(document).ready(setup);
