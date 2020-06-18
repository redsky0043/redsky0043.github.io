// Task#1

// let admin;
// let name = 'John';

// admin = name;

// alert(admin);




/* Task #2 

    1. hello 1
    2. hello name
    3. hello ilya

    *написано без участі JS-ка))
*/



// Task#3

// let userNum = prompt('write a number', '');

// if (userNum > 0) {
//     alert(1)
// } else if (userNum == 0) {
//     alert(0)
// } else {
//     alert(-1)
// };




// Task#4

// let age = +prompt('write a number', '');

// if ((age >= 14) && (age <= 90)) {
//     alert(true)
// } else {
//     alert(false)
// }





// Task#5

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//       alert( i );
//     }
//   }




// Task#6

// function min(a,b) {
//     if (a < b) {
//         return a
//     } else {return b}
// }

// alert(min(4,6));



// Task#7

let x = prompt("write x", '');
let n = prompt("write n", '');

function pow(x,n) {
    
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
      }

    return result
}

alert( pow(x, n) );