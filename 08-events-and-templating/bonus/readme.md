# Class 08 Bonus Content

## 1. Modifying Style w/o jQuery

We already mentioned last class that there are two newer JavaScript `document` methods that can be used to select DOM elements.

```js
// Select first item to match selector
document.querySelector('#myId');

// Select all the elements that match selector
document.querySelectorAll('.task');
```

Well, it turns out anything we can do in jQuery, we can also do without it, though at times it may be more verbose. Here is an example of how we can modify the style of all list items on the page in jQuery and then without:

```js
// with jQuery
$('li').css('color', 'blue');

// w/o jQuery
var listItems = document.querySelectorAll('li');
// listItems is an array, so we can iterate through them updating style
listItems.forEach(function(listItem) {
  listItem.style.color = 'blue';
});
```

### Now you: try to refactor our DOM Manipulation code to not use jQuery

---

## 2. Event Listeners w/o jQuery

If you are not using jQuery, not only can we select and modify DOM elements, we can also attach event listeners using native JavaScript.

```js
// With jQuery
$('button').on('click', doSomething);

// Without jQuery
document.querySelector('button').addEventListener('click', doSomething);
```

---

## 3. Anonymous Event Listener Functions

Notice that jQuery's `.on` function and the comparable JavaScript `.addEventListener` function are "Higher-order" functions. As written above, their second parameter is our event listener function. As we've seen before, we can use anonymous functions as arguments instead of named functions:

```js
// With jQuery
$('button').on('click', function () {
  // do something
});

// Without jQuery
document.querySelector('button').addEventListener('click', function () {
  // do something
});
```

---

## 4. Event Object

Event listener functions, when called, are passed an object argument. That object represents the event that triggered them. When writing event listeners, we can choose to use that event object or not.

```js
// With jQuery
$('button').on('click', function (event) {
  // do something
  console.log(event);
  // => {...}
});

// Without jQuery
document.querySelector('button').addEventListener('click', function (event) {
  // do something
  console.log(event);
  // => {...}
});
```

The event object has things we might be interested in:

```js
document.querySelector('button').addEventListener('click', function (event) {
  // The element that was clicked on (hint: in jQuery this becomes `this`)
  event.target;

  // The type of event
  event.type;
  // 'click'
});
```

---

## 5. Delegated Event Listeners w/o jQuery

In order to create delegated event without jQuery, we need to use the `event` object passed to our handler.

```js
// With jQuery
$('#myList').on('click', 'li', function() {
  // do something
});

// Without jQuery
document.querySelector('#myList').addEventListener('click', function (event) {
  // Ensure that the target of the event matches the 'li' selector
  if (e.target && e.target.matches('li')) {
    // do something
	}
});
```

---

## 6. Create HTML Elements w/o jQuery

Surprise! We can do this without jQuery as well:

```js
// With jQuery
var listItem = $('<li>');

// Without jQuery
var listItem = document.createElement('li');
```

---

## Can you refactor our code from this class to not use jQuery?
