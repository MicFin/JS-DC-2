## Class 14 Bonus Material

### Firebase Auth Promises

When calling the Firebase auth methods like `createUserWithEmailAndPassword` and `signInWithEmailAndPassword`, the return value is a JavaScript Promise. This means we can use the Promise method `then` for running callbacks and the Promise method `catch` to catch errors.

```js
firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user) {
    // register successful
}).catch(function(error) {
    // register unsuccessful
});
```

---

### Firebase Database Ref Paths

There are two ways to traverse the Database Object. One way is the way we saw in class, using `child`:

```js
firebase.database().ref('todos').child('kjshshc12jn');
```

We can do the same thing using a ref "path":

```js
firebase.database().ref('todos/kjshshc12jn');
```

It is also useful to note that child calls can be chained.

```js
firebase.database().ref('todos/njdfhdf78dhd/completed');
// ===
firebase.database().ref('todos').child('njdfhdf78dhd').child('completed');
```

---

### Firebase Ordering Snapshot Results

If our database looks like this:

```js
{
    scores: {
        ajcasch: {
            user: 'tim',
            points: 12
        },
        jcd8sdc: {
            user: 'jane',
            points: 76
        }
    }
}
```

We can get an ordered list by using `orderByChild`:

```js
firebase.database().ref('scores').orderByChild('points').on('value', function(snapshot) {
    var orderedList = snapshot.val();
});
```
