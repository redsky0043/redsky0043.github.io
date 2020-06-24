
let arr = [
    { operation: '1+2+(3/3)', result: '4', },
    { operation: '2+3', result: '5', },
    { operation: '2+2*3', result: '8', },
    { operation: '1+1+1+1+1', result: '5', },
    { operation: '9/3', result: '3', },
];

let listHTML = "";

arr.forEach(item => {
    listHTML += `
    <div class="modal__row">
        <div class="modal__row__operation style">
            ${item.operation}
        </div>
        <div class="modal__row__sym style">
            =
        </div>
        <div class="modal__row__result style">
            ${item.result}
        </div>
    </div>
    `;
});

list.innerHTML = listHTML;


