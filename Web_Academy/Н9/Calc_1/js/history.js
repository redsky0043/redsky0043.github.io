
let arr = [];

const renderList = smt => {
    if ( smt.length == 0 ) {
        list.innerHTML = `
        <div class="modal__alert">
            calculation results will be displayed here
        </div>
        `;
       }
       else {
    let listHTML = "";
    smt.forEach(item => {
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
    }
};

renderList(arr);