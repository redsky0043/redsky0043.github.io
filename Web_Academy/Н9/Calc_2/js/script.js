

document.querySelectorAll("button").forEach(btn => {
    const input = document.querySelector(".calc__screen");
    btn.addEventListener("click", () => {
       switch (btn.value)
            {
                case "clear":
                    input.value = "";
                    break;

                case "=":
                    input.value = calc(input.value);
                    break;
                
                case "del":
                    input.value =  input.value.replace(/.$/, "") ;
                    break;
 
                case "%":
                    input.value = calc(input.value);
                    break;

                default:
                    input.value += btn.value;
                    break;
            }
    })
});
