// Model
var count = 0;

// View

function renderCount() {
  var source = $('#count-template').html();
  var template = Handlebars.compile(source);

  var countHtml = template({
    count: count,
    high: count > 100
    low: count < 0
  });
  $('#counts').html(countHtml);
}

// Controller

function setup() {
  // Setup the styles
  renderCount();

  // Setup the event listeners
  $('#plus').on('click', increment);
  $('#minus').on('click', decremment);
  $('#zero').on('click', zero);
}

function increment() {
  count()++;
  renderCount();
}

function decrement() {
  count -= 2;
  renderCount();
}

function zero() {
  count = 0;
  renderCount();
}

$(document).ready(setup);
