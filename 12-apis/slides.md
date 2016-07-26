# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)
## APIs

- Describe what an API is and how to use it
- Read documentation to integrate an HTTP API

---

## Agenda

| Timing | Topic |
| --- | --- |
| 15 min | HW Review |
| 20 min | Intro to APIs |
| 30 min | Exercise: Weatherify |
| 110 min | Lab |
| 5 min | Final Questions & Exit Tickets |

---

## HW Review

---

## Intro to APIs

Application Programming Interface

Note:

How we interact with programs, without bothering us with the details of implementation. It's what we read in documentation.

--

### Types of APIs

There are different interfaces that we may interact with.

--

#### Language APIs

For example, the JavaScript API. A language API contains:

- functions
  - parameters
  - return values
  - description of what it does.

--

#### JavaScript API

- [`Math.pow`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)
- [`document.getElementById`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

--

#### Library APIs

For example, the jQuery API.

- [`$.ajax`](http://api.jquery.com/jquery.ajax/)
- [`$.animate`](http://api.jquery.com/animate/)

--

#### HTTP APIs

How we interact with services, like Facebook, Twitter, Instagram, OpenWeatherMap, etc.

- Instead of functions, HTTP Methods + URLs (endpoints)

- Instead of function parameters, query parameters

- Instead of return values, example JSON responses

--

#### Example API Documentation

```
endpoint

GET /api/user

parameters

userId - the id for the user

response

{
  "id": 123,
  "name": "Jacob"
}
```

--

#### Example API Documentation

- [NYT Books](https://developer.nytimes.com/books_api.json#/Documentation/GET/lists.%7Bformat%7D)
- [Instagram](https://www.instagram.com/developer/endpoints/comments/)

--

### REST

Representational State Transfer. A way of designing HTTP APIs. For this reason, we sometimes call HTTP APIs, REST APIs.

--

#### REST API

```
GET /api/user/:userid

POST /api/user

PUT /api/user/:userid

DELETE /api/user/:userid
```

These endpoints, taken together would be called a "resource". In this case, the user resource.

--

### Authentication

There are two primary methods used for API Authentication.

- API Keys (simple)
- OAuth (complex)

--

#### API Key Auth

Generate a token on the website and include it in requests.

---

## Exercise: [Open Weather Map API](http://openweathermap.org/api)

---

## [Lab](https://github.com/jacobdfriedmann/feedr)

---

## [Exit Ticket! (Class 13)](http://goo.gl/forms/KzVZ9fuo2YYw5WIB3)

---

# Goodnight :-)
