// 1. Write a function that takes two string arguments (firstName and lastName)
// and returns an Object that has those two properties.



// 2. Convert this regular function into a Class constructor function and use it to create
// a car instance. Log the car instance's model to the console.
//
// function makeCar(make, model, year) {
//   var newCar = {};
//   newCar.make = make;
//   newCar.model = model;
//   newCar.year = year;
// }
//
// var jacobsCar = makeCar('Kia', 'Forte', 2014);



// 3. Convert this regular function into a Class constructor function and use it to create
// a tweet instance. Log the tweet instance's text to the console.
//
// function makeTweet(userId, text, tags) {
//   return {
//     userId: userId,
//     text: text,
//     tags: tags
//   };
// }
//
// var myTweet = makeTweet(1234, 'This is my tweet #yay', ['yay']);



// 4. Use the instanceof to check the class of the instances from 2. and 3.



// 5. Use the regular function and the constructor to create two Objects,
// see how they differ by using instanceof

function makePerson(firstName, lastName) {
  var newPerson = {};
  newPerson.firstName = firstName;
  newPerson.lastName = lastName;

  return newPerson;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}


// 6. Use prototypes for the part of the constructor that is same in every instance.
//
// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.numberOfWheels = 4;
//   this.description = 'a wheeled, self-powered motor vehicle used for transportation';
// }



// 7. Convert the regular function that returns a plain Object to a Constructor and prototype class definition.
//
// function makeTodoList(tasks) {
//   return {
//     tasks: tasks,
//     name: 'Todo List',
//     logTasks: function() {
//       this.tasks.forEach(function(task) {
//         console.log(task);
//       });
//     },
//     addTask: function(task) {
//       this.tasks.push(task);
//     }
//   };
// }
