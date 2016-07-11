# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Events and Templating (3:00)

## Objectives
*After this lesson, students will be able to:*

- Implement advanced jQuery events.
- Use event delegation to manage dynamic content.
- Add a templating language to our projects for better and more abstracted content manipulation.

## Agenda

| Timing | Description |
| --- | --- |
| 20 min | Review |
| 10 min | jQuery functions |
| 15 min | Exercise: Manipulating the DOM |
| 20 min | Intro to Events |
| 30 min | Exercise: Todo List |
| 15 min | Events in Depth |
| 15 min | Separation of Concerns, MVC |
| 20 min | Intro to Templating |
| 30 min | Exercise: Todo List MVC |
| 5 min | Final Questions & Exit Tickets |

## Preparation
*Before this lesson, students should already be able to:*

- Select and Manipulate the DOM by using jQuery selectors and functions.

> Note: Last class, we learned how to manipulate the DOM using jQuery selectors! Check with students to make sure that everyone is comfortable with the materials covered in the last class.

---

## Review: Quiz (20 min)

---

## jQuery functions (10 min)

Now that we know how to find the different elements within the DOM, we need to know how to modify them.

### jQuery functions

```js
// Manipulate the elements CSS
$('#myId').css('color', 'blue');

// Change the HTML inside the elements
$('div').html('Hello World!');
```

### So Many jQuery Functions

- **[css()](http://api.jquery.com/css)**
- **[html()](http://api.jquery.com/html)**
- **[find()](http://api.jquery.com/find)**
- **[hide()](http://api.jquery.com/hide)**
- **[show()](http://api.jquery.com/show)**
- **[append()](http://api.jquery.com/append)**
- **[prepend()](http://api.jquery.com/prepend)**
- **[on()](http://api.jquery.com/on)**
- **[off()](http://api.jquery.com/off)**
- **[attr()](http://api.jquery.com/attr)**
- **[val()](http://api.jquery.com/val)**
- **[text()](http://api.jquery.com/text)**
- **[each()](http://api.jquery.com/each)**

---

## Exercise: Manipulating the DOM (15 min)

Note:

- Change list items to blue
- Bold the first list item
- Make the title say TODO
- Add a text input and button after the title

---

## Intro to Events (20 min)

Events, and responding to events, play an important role in JavaScript applications - especially those front-end applications. So far, the things we've done with JavaScript in the front end could be easily done by CSS and HTML alone. When JS becomes useful and interesting is when it used for responding to events.

### JS Front-End Applications

1. Find elements on the page
2. Listen for events on those elements (clicks, key press, etc)
3. Respond in some way

### Event Listener

A function used to respond to events:

```js
$('button').on('click', turnListItemsBlue);

function turnListItemsBlue() {
  $('li').css('color', 'blue');
}
```

### What other events?

### Browser Events

*Mouse Events*
- click
- dblclick
- mouseenter
- mouseleave

*Keyboard Events*
- keypress
- keydown
- keyup

*Form Events*
- submit
- change
- focus
- blur

*Document/Window Events*
- load
- resize
- scroll
- unload

### Shorthand Events

Some common events let us bypass the `.on` call:

```js
$('button').click(doSomething);

$(document).ready(setup);
```

### `$(document).ready`

BEST PRACTICE: Before we start manipulating the DOM, wait for the `documents` ready event.

### `this` in jQuery

`this` in JavaScript is complex and we will spend nearly a whole class on it later in the course. However, in jQuery event handler functions it has a specific meaning: the DOM element on which the event occured.

```js
$('li').on('click', doSomething);

function doSomething() {
  console.log(this);
  // the li that was clicked
}
```

### Using `this` in jQuery

```js
$('li').on('click', doSomething);

function doSomething() {
  // All `li`s on the page
  $('li').css('color', 'red');

  // Only the `li` that was clicked
  $(this).css('color', 'red');
}
```

---

## Exercise: TODO List (30 min)

Note:

- When list items are clicked, add a strikethrough
- Refactor the original code into a "setup" function
- Find the button element
- When it is clicked, add an item to the list with the value of the input
- BONUS: Make the todo add when enter is pressed too
- Refactor to use classes instead of `.css`

---

## Events in Depth (15 min)

### Events Bubble

<img src="img/events1.png" style="max-height: 600px" />

<img src="img/events2.png" style="max-height: 600px" />

<img src="img/events3.png" style="max-height: 600px" />

<img src="img/events4.png" style="max-height: 600px" />

<img src="img/events5.png" style="max-height: 600px" />

<img src="img/events6.png" style="max-height: 600px" />

<img src="img/events7.png" style="max-height: 600px" />

<img src="img/events8.png" style="max-height: 600px" />

<img src="img/events9.png" style="max-height: 600px" />

<img src="img/events10.png" style="max-height: 600px" />

<img src="img/events11.png" style="max-height: 600px" />

<img src="img/events12.png" style="max-height: 600px" />

### Event Delegation

<img src="img/events13.png" style="max-height: 600px" />

<img src="img/events14.png" style="max-height: 600px" />

<img src="img/events15.png" style="max-height: 600px" />

<img src="img/events16.png" style="max-height: 600px" />

<img src="img/events17.png" style="max-height: 600px" />

<img src="img/events18.png" style="max-height: 600px" />

<img src="img/events19.png" style="max-height: 600px" />

### Delegated jQuery Event Listener

We can attach a listener to a parent element when children will be added dynamically. We can pass a selector that tells jQuery what children of the parent we want to listen to:

```js
$('#myList').on('click', 'li', toggleItem);
```

### Use jQuery to Create HTML Elements

```js
// Selects li elements
$('li');

// Creates an li element
$('<li>');
```

### Duel Nature of jQuery Functions

Many jQuery functions can be used to get or set values depending on how many parameters are passed in.

```js
// get the input value
var inputValue = $('input').val();

// set the input value
$('input').val('hello world');
```

---

## Separation of Concerns (15 min)

Separation of Concerns is a design principle that says we can simplify our code by keeping code that has different jobs (or concerns) in different places.

In front-end applications, the "concerns" we often separate are:

- Models (Application State)
- Views (Rendering)
- Controllers (Communicating between Model and View)

### Model-View-Controller (MVC)

The MVC application architecture is very common in not only front-end, but also back-end applications. It is the foundation of Backbone, Angular, as well as Ruby on Rails and many other frameworks.

### Model

A representation of the application state represented in JavaScript data structures.

How can we create a Model for our "TODO" application?

### View

Templates and functions to render data into the templates.

---

## Intro to Templating (20 min)

Templates are HTML snippets that have places to enter dynamic data.

### Templating Libraries

There are many templating libraries, all of which have similar capabilities.

- [Handlebars](http://handlebarsjs.com/)
- [Mustache](http://mustache.github.io/)
- [Underscore templates](http://underscorejs.org/)

We'll be using Handlebars.

### Add Handlebars To Project

To add handlebars, we need to add the script tag:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.min.js"></script>
```

### Using Handlebars

Handlebars has a 4 step process to implementing templates in our applications:

  1. Create the template(s)
  2. Reference and compile template
  3. Pass the object to Handlebars for rendering
  4. Add the new rendered element to DOM

### Create the template

1. We create our element surrounded in script tags with a reference id and a type of handlebars template. We surround the content that's to be replaced by double curly brackets.

```html
  <script id="hello-world-template" type="text/x-handlebars-template">
    <h1>{{helloTitle}}</h1>
    <p>{{helloContent}}</p>
  </script>
```

### Reference and compile template

2. We can then use jQuery to reference the newly created template and pass that reference to Handlebars.

```js
  var source = $('#hello-world-template').html();
  var template = Handlebars.compile(source);
```

### Pass the object to Handlebars for rendering

3. We can then pass our data object to the newly created template.

```js
  var source = $('#hello-world-template').html();
  var template = Handlebars.compile(source);

  var helloStatement = { helloTitle: "Hello world", helloContent: "GA JS class is just awesome"};

  var renderedTemplate = template(helloStatement);
```

### Add the new rendered element to DOM

4. And add it to the DOM via jQuery.

```js
  var source = $('#hello-world-template').html();
  var template = Handlebars.compile(source);

  var helloStatement = { helloTitle: "Hello world", helloContent: "GA JS class is just awesome"};

  var renderedTemplate = template(helloStatement);
  $('body').append(renderedTemplate);

  // or you could have done $('body').append(template(helloStatement));
```

How can we use Templating to create a View for our "TODO" application?

---

## Controller (30 min)

Liaison between Model and View. Controller is responsible for event listeners and communicating those events to the Model.

How can we make a Controller for our "TODO" application?

### jQuery `.parent()`

Find the parent element in the DOM tree.

### jQuery `.index()`

Find the index of a "sibling" element in the DOM

Note:

- Add "complete" link
- Now that we have the basic functionality of our TODO app, add the ability to delete a todo

---

## Conclusion (5 min)

Ask students what was learned. Make sure the objectives have been met.
* Why would we want to use templating?
* What is event delegation? Why would we use it?

#### Further Resources

- [jQuery: Event delegation][1]
- [Handlebars.js][2]
- [jQuery: Handling events][3]
- [Advanced reading: Understanding MVVM][4]
- [JavaScript MVC][5]

[1]: https://learn.jquery.com/events/event-delegation/
[2]: http://handlebarsjs.com/
[3]: https://learn.jquery.com/events/handling-events/
[4]: http://addyosmani.com/blog/understanding-mvvm-a-guide-for-javascript-developers/
[5]: http://alistapart.com/article/javascript-mvc
