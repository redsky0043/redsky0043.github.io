const findNextNotDigitIndexFrom = (list, from = 0) => {
    let nextIndex = list.length;
    for (let i = from; i < list.length; i++) {
        if (isNaN(list[i])) {            
            nextIndex = i;
            break;
        }
    }
    return nextIndex;
}
​
const createValidCalcArray = (list) => {
    list = list.replace(' /g', '').split('');
    list.forEach((item, index, self) => {
        if (!isNaN(item)) {
            
            const start = index;
            const end = findNextNotDigitIndexFrom(self, start);
            const result = self.slice(start, end).join('');
                        
            if (start !== end) {
                list.splice(start, result.length, result);
            }
        }
    });
    return list;
}
​
const nestedBrackets = (s, i = 0) => {
    let isMatched = false;
    let open = [];
    let close = []
    s.forEach((item, index) => {
        if (!isMatched) {
            if (item === '(') {
                open = [...open, index];
            }
            if (item === ')') {
                close = [index, ...close ]
            }
            if (open.length && open.length === close.length) {
                isMatched = true;
            }
        }
    });
    return ([open[0], close[0]])
}
​
​
const calc = (calculate) => {
    let calcList = createValidCalcArray(calculate);
​
    const makeCalc = (x) => {
        
        const makeOperation = (operation) => {
            if (x.indexOf(operation) > 0) {
                const start = x.indexOf(operation);
                const operand1 = Number(x[start - 1]);
                const operand2 = Number(x[start + 1])
                let result = null;
                
                
                switch (operation) {
                    case '+':
                        result = operand1 + operand2;
                        break;
                    case '-':
                        result = operand1 - operand2;
                        break;
                    case '/':
                        result = operand1 / operand2;
                        break;
                    case '*':
                        result = operand1 * operand2;
                        break;
                }
                x.splice(start - 1, 3, result);
                makeCalc(x);
            }
        }
    
        if (x.indexOf('(') >= 0) {
            const [open, close] = nestedBrackets(x);
            const breckets = x.slice(open + 1, close);
            
            x.splice(open, breckets.length + 2, ...makeCalc(breckets))
            makeCalc(x);
        }       
        makeOperation('/')
        makeOperation('*')
        makeOperation('-');
        makeOperation('+')
​
        return x;
    }
    return makeCalc(calcList).join('');    
}
​
const expect = (arg, result) => {
    console.log("\x1b[33m -------------------------- \x1b[89m")
    let res = calc(arg);
    if (Number(res) === Number(result)) {
        console.log(`\x1b[32m  [${arg}] equal to ${result}. Good job \x1b[89m`)
​
    } else {
        console.log(`\x1b[91m  [${arg}] not equal to ${result}. We receive ${res} \x1b[39m`)
    }
    console.log("\x1b[33m -------------------------- \x1b[89m")
​
};
expect('1+8/4', '3');
​
expect('   1 +   8/    4', '3');
​
expect('2*5+1*10-23/4', '14.25');
​
expect('10/0', 'Infinity');
​
expect('(((1+(1+1))+(1+(1+1))))', '6');