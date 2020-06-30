document.querySelectorAll("button").forEach(btn => {
    const input = document.querySelector(".calc__screen");
    btn.addEventListener("click", () => {
        if (btn.value === "clear") {
            input.value = "";
        } else if (btn.value === "=") {
            input.value = calc(input.value);
        } else {
            input.value += btn.value;
        };
    })
});




