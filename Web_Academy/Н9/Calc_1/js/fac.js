function factorial(n) {
    n = eval(n);
    let val=1;
    for (let i = n; i>0; i--)
        val *= i;
    return val;
}