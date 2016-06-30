var streetNumbers = [221, 12, 420, 1600, 31, 10];
var streetNames = ['Baker St.', 'Pennsylvania Ave NW', 'Spooner Street', 'Wallaby Way'];
var cities = ['Washington D.C.', 'Seattle', 'Portland', 'New York City', 'Houston'];
var states = ['Virginia', 'New Columbia', 'Maryland', 'California', 'Washington'];
var zipCodes = [12345, 54321, 22201, 67891, 64736];

var streetNumberIndex = Math.floor(Math.random() * streetNumbers.length);
var streetNameIndex = Math.floor(Math.random() * streetNames.length);
var cityIndex = Math.floor(Math.random() * cities.length);
var stateIndex = Math.floor(Math.random() * states.length);
var zipCodeIndex = Math.floor(Math.random() * zipCodes.length);

var streetNumber = streetNumbers[streetNumberIndex];
var streetName = streetNames[streetNameIndex];
var city = cities[cityIndex];
var state = states[stateIndex];
var zipCode = zipCodes[zipCodeIndex];

console.log(streetNumber + ' ' + streetName);
console.log(city + ', ' + state + ' ' + zipCode);
