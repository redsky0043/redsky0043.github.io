

let x = prompt("write x", '');
let n = prompt("write n", '');

function pow(x,n) {
    
    let sum = x;

    for (let i = 1; i < n; i++) {
        sum = sum * x;
      }

    return sum
}

if (n < 1) {
    alert('try a positive number');
  } else {
    alert( pow(x, n) );
  }