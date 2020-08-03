

document.querySelectorAll("button").forEach(btn => {
    const input = document.querySelector(".calc__screen");
    btn.addEventListener("click", () => {
       switch (btn.value)
            {
                case "clear":
                    input.value = "";
                    break;

                case "=":
                    let oper = input.value;
                    input.value = eval(input.value);
                    let res = input.value;
                    arr.push({operation: oper, result: res});
                    renderList(arr);
                    break;

                case "!":
                    let oper1 = input.value;
                    input.value = factorial(input.value)
                    let res1 = input.value;
                    arr.push({operation: oper1, result: res1});
                    renderList(arr);
                    break;
                
                case "%":
                    input.value = pers(input.value);
                    break;
                 
                case "del":
                    input.value = input.value.replace(/.$/, "") ;
                    break;

                default:
                    input.value += btn.value;
                    break;
            }
        // if (input.value.length > 5) {
        //     input.value = input.value.substring(0, 9);
        // }
    })
});