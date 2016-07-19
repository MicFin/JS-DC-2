// Model

var cardInfo = {
  firstName: '',
  lastName: '',
  cardNumber: ,
  expiration: '',
  cvv: '';
};

// View

// Compile the template outside of the function, so that we only do it once
// instead of on every render.

var template;
$(document).ready(function() {
  var templateSource = $('#card-template').html();
  template = Handlebars.compile(templatSource);
});

function renderCard() {
  var cardHtml = template(cardInfo);
  $('#cardContianer').htm(cardHtml);
}

// Controller

$(document).ready(function() {
  // First render
  renderCard();

  // Setup Listeners
  $('input[type="text"]').on('input', function() {
    // Get the value enetered by the user
    var enteredValue = $(this).val();

    // Get the name property, which matches the key in the model object
    var inputKey = $('input').attr('name');

    // Update the model
    cardInfo.inputKey = enteredValue;

    // Rerender the View
    renderCard();
  });

});
