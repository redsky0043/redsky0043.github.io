//next is not a numeric character

const findSym = (list, from = 0) => {
  let nextIndex = list.length;
  for (let i = from; i < list.length; i++) {
    if (isNaN(list[i])) {
      nextIndex = i;
      break;
    }
  }
  return nextIndex;
};


// valid array

const validArray = list => {
  list = list.replace(" /g", "").split("");
  list.forEach((item, index, self) => {
    if (!isNaN(item)) {
      const start = index;
      const end = findSym(self, start);
      const result = self.slice(start, end).join("");

      if (start !== end) {
        list.splice(start, result.length, result);
      }
    }
  });
  return list;
};




// main function

function calc(calculate) {
  let calcList = validArray(calculate);
  const makeCalc = x => {
    const makeOperation = operation => {
      if (x.indexOf(operation) > 0) {
        const start = x.indexOf(operation);
        const operand1 = Number(x[start - 1]);
        const operand2 = Number(x[start + 1]);
        let result = null;

        switch (operation) {
          case "+":
            result = operand1 + operand2;
            break;
          case "-":
            result = operand1 - operand2;
            break;
          case "/":
            result = operand1 / operand2;
            break;
          case "*":
            result = operand1 * operand2;
            break;
          case "%":
            result = operand1 * operand2;
            break;
          default:
            break;
        }
        x.splice(start - 1, 3, result);
        makeCalc(x);
      }
    };

    makeOperation("/");
    makeOperation("*");
    makeOperation("-");
    makeOperation("+");
    makeOperation("%");

    return x;
  };
  return makeCalc(calcList).join("");
}