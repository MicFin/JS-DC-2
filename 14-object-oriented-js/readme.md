# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)
## Object Oriented JavaScript

TODO

---

### Agenda

| Timing | Topic |
| --- | --- |
| 15 min | Intro to Lab |
| 155 min | Lab |

---

## Intro to Object Oriented Programming

We'll start by talking about OOP as a programming paradigm that isn't JS specific. We'll then see how we can use OOP in JS programs.

--

### Class

A description for a category of Objects.

- Person
- Animal
- ShoppingCart
- Controller

--

#### Class Properties

A Class describes what properties a category of Objects will contain.

A property is a characteristic of an Object.

Person
  - firstName (String)
  - lastName (String)
  - age (Number)
  - friends (Array of Person)

--

#### Class Methods

A Class also describes the functionality of its Objects in methods (functions).

Person
  - walk
  - sayHi
  - countFriends

--

#### Class

<img src="img/class.png" style="max-height: 500px" />

--

#### Class Constructor

A special method used to create new Objects of a Class.

--

#### Instances

Objects created from a class definition.

--

#### Instances

<img src="img/instance.png" style="max-height: 500px" />

---

## OOP In JS

Exercise: Write a function that takes two string arguments (firstName and lastName) and returns an Object that has those two properties.

--

## Constructor

In JavaScript, OOP starts at the constructor, which is just a function.

```js
function Person() {}
```

--

### Constructor

Best Practice: Constructor names are capitalized (consistent with other languages)

--

### Using the constructor

In order to use a constructor, we must use the `new` keyword.

```js
function Person() {}

var jacob = new Person();

console.log(jacob);
// {}
```

--

### Adding Properties to our Class

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
```

--

### `this` inside of a constructor

When inside of a constructor function, `this` refers to the Object that is being created.

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var jacob = new Person('Jacob', 'Friedmann');
console.log(jacob);
// { firstName: 'Jacob', lastName: 'Friedmann' }
```

--

### Exercise: Can you convert this function to a Constructor?

```js
function makeCar(make, model, year) {
  var newCar = {};
  newCar.make = make;
  newCar.model = model;
  newCar.year = year;
}

var jacobsCar = makeCar('Kia', 'Forte', '2014');
```

--

### Literals vs. Constructed Objects

Literals are just a shortcut for using the constructor.

```js
// Literals
var objectLiteral = {};
var arrayLiteral = [];

// Constructed Versions
var constructedObject = new Object();
var constructedArray = new Array();
```

--

### "Plain" Objects

Objects we've used up to this point, created by using an Object literal or the `new Object()` constructor.

```js
{}
new Object();
```

--

### instanceof

We can see if an Object belongs to a class (used a certain constructor) by using `instanceof`:

```js

var myObj = new Object(); // or {}
var jacob = new Person('Jacob', 'Friedmann');
console.log(myObj instanceof Object);
// true
console.log(myObj instanceof Person);
// false
console.log(jacob instanceof Person);
// true
```

--

### Adding Methods, Attempt 1

One way we could add methods is to add them the same way we do properties:

```js
function Person(firstName, lastName) {
  // properties
  this.firstName = firstName;
  this.lastName = lastName;

  // methods
  this.sayHi = function() {
    console.log('Hi, my name is ' + this.firstName + ' ' + this.lastName);
  }
}
```

--

### Adding Methods, Attempt 1

This works, but there is a better way.

--

### Object prototypes

Constructor functions have a "prototype" that it uses to build instances.

```js
// Define Class
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.species = 'Homo sapiens';

// Create an instance
var jacob = new Person('Jacob', 'Friedmann');

console.log(jacob.firstName);
// 'Jacob'
console.log(jacob.species);
// 'Homo sapiens'
```

--

#### What's going on here

When looking up a property on an object (dot or bracket notation), if it can't be found on the instance, JavaScript will look to the prototype.

--

<img src="img/prototype1.png" style="max-height: 600px" />

--

<img src="img/prototype2.png" style="max-height: 600px" />

--

<img src="img/prototype3.png" style="max-height: 600px" />

--

<img src="img/prototype4.png" style="max-height: 600px" />

--

<img src="img/prototype5.png" style="max-height: 600px" />

--

<img src="img/prototype6.png" style="max-height: 600px" />

--

<img src="img/prototype7.png" style="max-height: 600px" />

--

<img src="img/prototype8.png" style="max-height: 600px" />

--

<img src="img/prototype9.png" style="max-height: 600px" />

--

<img src="img/prototype10.png" style="max-height: 600px" />

--

<img src="img/prototype11.png" style="max-height: 600px" />

--

<img src="img/prototype12.png" style="max-height: 600px" />

--

<img src="img/prototype13.png" style="max-height: 600px" />

--

<img src="img/prototype14.png" style="max-height: 600px" />

--

### Object prototypes

If something is the same in every object of a class, we can put it in the prototype instead of directly in the instance.

--

### Object prototypes

```js
// Define Class
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.species = 'Homo sapiens';

// Create an instance
var jacob = new Person('Jacob', 'Friedmann');

console.log(jacob.firstName);
// 'Jacob'
console.log(jacob.species);
// 'Homo sapiens'
```

--

### Exercise: prototypes

Use prototypes for the part of the constructor that is same in every instance.

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.numberOfWheels = 4;
  this.description = 'a wheeled, self-powered motor vehicle used for transportation';
}
```

--

### Adding Methods, Attempt 2

Use the prototype!

```js
function Person(firstName, lastName) {
  // properties
  this.firstName = firstName;
  this.lastName = lastName;
}

// methods
Person.prototype.sayHi = function() {
  console.log('Hi, my name is ' + this.firstName + ' ' + this.lastName);
}

var jacob = new Person('Jacob', 'Friedmann');
jacob.sayHi();
// 'Hi, my name is Jacob Friedmann
```

--

### Exercise: Prototype methods

Convert the regular function that returns a plain Object to a Constructor and prototype class definition.

```js
function makeTodoList(tasks) {
  return {
    tasks: tasks,
    name: 'Todo List',
    logTasks: function() {
      this.tasks.forEach(function(task) {
        console.log(task);
      });
    },
    addTask: function(task) {
      this.tasks.push(task);
    }
  };
}
```

--
