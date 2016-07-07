# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)
## Intro to DOM and jQuery

- Use fundamental JS concepts to build a node application.
- Explain the Document Object Model.
- Explain the methods and use the DOM in javascript.
- Manipulate the DOM by using jQuery selectors and functions.

---

## Agenda

| Timing | Topic |
| --- | --- |
| 100 min | Lab |
| 20 min | Intro to JS in the Browser |
| 15 min | The Document Object Model (DOM) |
| 15 min | Working with the DOM |
| 10 min | Intro to jQuery |
| 15 min | Codealong: jQuery and DOM |
| 5 min | Final Questions & Exit Tickets  |

---

## Lab

---

## Intro to JS in the Browser

--

### Role of JS in the Browser

- Updating the style of HTML
- Displaying dynamic data (adding HTML)
- Getting user input from (getting values from HTML inputs)
- Communicating with a back-end or APIs

--

### How to get JS in the browser?

Note:

Let's set up a html file for our code-alongs

--

#### Inline JS

```html
<button onclick="alert('hello world')">Click Me</button>
```

Note:

We can write JavaScript inline with HTML. Generally, not a great idea.

--

#### In a Script tag

```html
<head>
    <script>
        alert('hello world!');
    </script>
</head>
```

Note:

We can write javascript directly in a script tag. A little better.

--

#### In a separate file

```html
<script src="js/index.js" />
```

Note:

The best!

--

#### On the internet!

We can include files from our project and files from the web.

```html
<script src="https://code.jquery.com/jquery-3.0.0.min.js" integrity="sha256-JmvOoLtYsmqlsWxa7mDSLMwa6dZ9rrIdtrrVYRnDRH0="   crossorigin="anonymous"></script>
```

--

#### BEST PRACTICE

Use separate files for JS.

---

## The Document Object Model (DOM)

A representation of a HTML that we can interact with in JavaScript.
We can access it through the `document` global variable.

Note:

This `document` variable is one of the primary differences between JS in the browser and JS in node. `document` does not exist in node. We can demonstrate this by using the Chrome developer tools and Node in interactive mode.

--

### The DOM is a Tree

The browser takes our HTML and turns it into a tree that we can manipulate.

Note:

Let's write some HTML and turn it into a DOM tree.

---

## Working with the DOM

There are a few ways to interact with the DOM:

--

### Original JavaScript Document Functions

```js
document.getElementById('myId');
document.getElementsByTagName('div');
document.getElementsByClassName('my-class');
```

--

### jQuery

```js
$('#myId');
$('div');
$('.my-class');
```

--

### New JavaScript Document Functions

```js
document.querySelector('#myId');
document.querySelectorAll('div');
document.querySelectorAll('.my-class');
```

--

### Why jQuery?

- Improves up the Original JavaScript Document functions in a big way.
- Browser support
- Ubiquitous
- Provides really easy ways to manipulate DOM

---

## Intro to jQuery

<img src="img/jquery.png" style="max-heigth: 300px" />

jQuery is a JavaScript library.

Note:

jQuery is a JavaScript library that makes manipulating DOM (and other common front-end application tasks) easier.

The name "jQuery" comes from the library's ability to find (or query for) elements in the DOM. It was originally called jSelect.

### jQuery Syntax

--

#### jQuery Global Function

We can imagine the jQuery library looks something like this:

```js
function jQuery(cssSelector) {
    ...
}
```

--

#### jQuery Global Function

or as we are most used to seeing it:

```js
function jQuery(cssSelector) {
    ...
}
var $ = jQuery;

// $()
```

--

#### CSS Selectors

jQuery uses CSS selectors to find elements in the DOM:

```css
#myId {

}

.my-class {

}

div {

}
```

--

#### CSS Selectors in jQuery

```js
$('#myId');
$('.my-class');
$('div');
```

Note:

jQuery allows us to query (i.e. select elements from) the DOM using the exact same selector syntax that we've used in CSS. To select the element described above, we would write

This will return a 'jQuery Object' - think of it as an abstraction for the search results from our query. You can retrieve any of the specific results using array notation (`jQuery("...")[i]`). There are also a number of special methods on the 'jQuery Object' that you can call which will manipulate the DOM for _all elements select by the query, at once_. These methods can do things like:

--

#### jQuery functions

```js
// Manipulate the elements CSS
$('#myId').css('color', 'blue');

// Change the HTML inside the elements
$('div').html('Hello World!');
```

--

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

--

### Wait for the Document to be Ready

Before we can start manipulating the DOM, we have to make sure it is ready.

```js
$(document).ready(function() {

});
```

---

## Code-along: jQuery and DOM (15 min)

---

## Assignment 4

- Create a GitHub repository for your Unit 1 Project (the S.R.S.V. game)
- Drop a link to the repository [here](https://docs.google.com/forms/d/1sVghsOaS81_zhlKV9mhYtfx6Z4zEG33b_A5iFtHWurY/viewform)
- [Eloquent JS - Chapter 12: JavaScript and The Browser](http://eloquentjavascript.net/12_browser.html)
- [Eloquent JS - Chapter 13: The Document Object Model](http://eloquentjavascript.net/13_dom.html)

Due Monday, July 11

--

## [Exit Ticket! (Class 8)](http://goo.gl/forms/KzVZ9fuo2YYw5WIB3)

---

# Goodnight :-)
