var i = 99;

while (i >= 0) {
    var number = i > 0 ? i : 'no more';
    var bottleWord = i === 1 ? 'bottle' : 'bottles';
    var action = i > 0 ? 'take one down and pass it around' : 'go to the store and buy some more';
    i--;
    var secondBottleWord = i === 1 ? 'bottle' : 'bottles';
    var secondNumber = i > 0 ? i : 'no more';

    console.log(number + ' ' + bottleWord + ' of beer on the wall,');
    console.log(number + ' ' + bottleWord + ' of beer.');
    console.log(action + ',');
    console.log(secondNumber + ' ' + secondBottleWord + ' of beer on the wall.');
    console.log('');
}
