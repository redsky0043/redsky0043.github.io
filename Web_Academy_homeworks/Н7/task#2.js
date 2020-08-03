


function makeCounter() {
    let a = 1;
    return function() {
        return a++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert(counter());
alert(counter());
alert(counter2());
alert(counter2());
alert(counter());
