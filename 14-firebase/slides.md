# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)
## Firebase

- Use Firebase to create JavaScript applications
- Describe what CRUD operations are and how they are used

---

### Agenda

| Timing | Topic |
| --- | --- |
| 50 min | Lab Review |
| 125 min | Firebase Codealong |
| 5 min | Final Questions & Exit Tickets |

---

## [HW Review](review.md)

--

### Visualizing Handlebars

```js
var Handlebars = {
    compile: function(templateString) {
        // do some crazy stuff

        return function(dataModel) {
            var renderedTemplateString;

            // do some more crazy stuff

            return renderedTemplateString;
        }
    }
}
```

---

## Intro to Firebase

<img src="img/firebase.png" style="max-height:500px" />

--

### Firebase

Backend-as-a-service (BaaS)

- Web Apps
- Mobile Apps

--

### Firebase

Backend-as-a-service (BaaS)

- Authentication (`firebase.auth()`)
- Database (`firebase.database()`)
- File Storage (`firebase.storage()`)
- Other things

--

### Code-along: JS Chat

- Register a new Firebase Application
- Set up the JavaScript client library
- Learn and use the Firebase APIs:
    - Auth
    - Database CRUD
- Deploy our application

--

### Getting Started

Register, create an application

--

### Firebase Client Library

Performs AJAX requests for us.

Client libraries are common for complex HTTP APIs, like Firebase.

--

### Client Libraries

May contain
- functions
- custom events

--

### `firebase.auth()`

We can use Firebase to manage our users and authentication.

- Email & Password Authentication
- OAuth (Facebook, Google, Twitter, etc)
- Anonymous

--

#### Enable Auth Methods

In the dashboard, activate email and password auth provider

--

#### User Registration

```js
firebase.auth().createUserWithEmailAndPassword(email, password);
```

--

#### User Login

```js
firebase.auth().signInWithEmailAndPassword(email, password);
```

--

#### User Logout

```js
firebase.auth().signOut();
```

Note:
- Do we think these functions are synchronous or asynchronous?

--

#### Custom Event: onAuthStateChanged

```js
firebase.auth().onAuthStateChanged(callback);
```

Note:
- Triggering events is another way of handling asynchronous tasks
- Event is triggered for login, logout, and register

--

#### Get the current user object

```js
firebase.auth().currentUser;
```

Note:

- `undefined` if no user is logged in
- an Object if the user is logged in

--

### `firebase.database()`

The database API can be used to persist data and communicate data to other users.

--

#### Persist data

When I come back to the site, things I've added are still there.

--

#### Communicate data

When I update something, other users can see it.

--

#### Real-time data

Firebase gives us the added ability to see changes made by other users in real time.

--

#### CRUD

When working with databases, we typically perform 1 of 4 operations:

- *C* reate
- *R* ead
- *U* pdate
- *D* elete

Note:
What do these operations remind you of?

--

#### Getting a reference to the database

We can think of the Firebase database as one big JavaScript Object

```js
firebase.database().ref(key);
```

Note:

In order to do CRUD operations, we need a reference to part of the database.

--

#### Reference Example

database:
```js
{
    todos: {
        cdjj32sds: {
            text: 'Go to the store',
            completed: false
        },
        kjhuec2sd: {
            text: 'Take out the trash',
            completed: true
        }
    }
}
```

reference:
```js
firebase.database().ref('todos');
```

--

#### Create Data

```js
firebase.database().ref(key).push(value);
```

--

#### Create Data Example

```js
firebase.database().ref('todos').push({
    text: 'Go to class',
    completed: false
});
```

```js
{
    todos: {
        cdjj32sds: {
            text: 'Go to the store',
            completed: false
        },
        kjhuec2sd: {
            text: 'Take out the trash',
            completed: true
        },
        jhac87cas: {
            text: 'Go to class',
            completed: false
        }
    }
}
```

--

#### Read Data

Reading data from the database requires us to set up an event listener.

```js
firebase.database().ref(key).on('value', callback);
```

--

#### Read Data Example

```js
{
    todos: {
        cdjj32sds: {
            text: 'Go to the store',
            completed: false
        },
        kjhuec2sd: {
            text: 'Take out the trash',
            completed: true
        }
    }
}
```

```js
firebase.database().ref('todos').on('value', processTodos);

function processTodos(snapshot) {
    var todos = snapshot.val();
    // do something
}
```

--

#### Update Data

```js
firebase.database().ref(key).child(id).update(updatedValues);
```

--

#### Update Data Example

```js
{
    todos: {
        cdjj32sds: {
            text: 'Go to the store',
            completed: false
        },
        kjhuec2sd: {
            text: 'Take out the trash',
            completed: true
        }
    }
}
```

```js
firebase.database().ref('todos').child('cdjj32sds').update({
    completed: true
});
```

```js
{
    todos: {
        cdjj32sds: {
            text: 'Go to the store',
            completed: true
        },
        kjhuec2sd: {
            text: 'Take out the trash',
            completed: true
        }
    }
}
```

--

#### Delete Data

```js
firebase.database().ref(key).child(id).remove();
```

--

#### Delete Data Example

```js
{
    todos: {
        cdjj32sds: {
            text: 'Go to the store',
            completed: false
        },
        kjhuec2sd: {
            text: 'Take out the trash',
            completed: true
        }
    }
}
```

```js
firebase.database().ref('todos').child('cdjj32sds').remove();
```

```js
{
    todos: {
        kjhuec2sd: {
            text: 'Take out the trash',
            completed: true
        }
    }
}
```

--

### On your own: Add a downvote button

--

### Deploying the App

--

#### Firebase Command Line Tools

Tools that allow you to configure, develop and deploy your application from the command line

--

#### Install the Tools

```
$ npm install -g firebase-tools
```

--

#### Login

Allows the tools to access your firebase account

```
firebase login
```

--

#### Initialize your project

```
firebase init
```

--

#### Serve Project Locally

```
firebase serve
```

--

#### Deploy the application

```
firebase deploy
```

--

## [Exit Ticket! (Class 15)](http://goo.gl/forms/KzVZ9fuo2YYw5WIB3)

---

# Goodnight :-)
