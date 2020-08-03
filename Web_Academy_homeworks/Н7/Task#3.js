function sumInput() {
    let arr = [];

    while (true) {

        let userValue = prompt ('Write a number', 0);
        
        if ( userValue === "" || userValue === null || !isFinite(userValue) ) break;

        arr.push(Number(userValue));
    }

    let sum = 0;
    for (let number of arr) {
        sum = sum + number;
    }
    return sum;

}

alert( sumInput() );