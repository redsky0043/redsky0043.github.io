

document.querySelectorAll("button").forEach(btn => {
    const input = document.querySelector(".calc__screen");
    btn.addEventListener("click", () => {
       switch (btn.value)
            {
                case "clear":
                    input.value = "";
                    break;

                case "=":
                    input.value = eval(input.value);
                    break;

                case "!":
                    input.value = factorial(input.value)
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
    })
});
