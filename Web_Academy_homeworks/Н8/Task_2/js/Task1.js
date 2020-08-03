
let arr = [
    { 
        user: 'Web Academy', 
        message: 'Хай) Як успіхи з pеактом?', 
        time: '16:35',
        day: 'Вт', 
        isMyMessage: true, },
    { 
        user: 'Serhii Boiko', 
        message: 'нормас)', 
        time: '16:36',
        day: 'Ср', 
        isMyMessage: false ,},
    { 
        user: 'Web Academy', 
        message: 'Треба допомога?', 
        time: '16:37',
        day: 'Чт', 
        isMyMessage: true, },
    { 
        user: 'Serhii Boiko', 
        message: 'Не завадить', 
        time: '16:38',
        day: 'Пт', 
        isMyMessage: false, },
    { 
        user: 'Web Academy', 
        message: 'Зараз все зробим)', 
        time: '16:39',
        day: 'Сб', 
        isMyMessage: true, },
    { 
        user: 'Serhii Boiko', 
        message: '&#128525; &#128525; &#128525;', 
        time: '16:40',
        day: 'Вс', 
        isMyMessage: false,
    },
];



// функция для сообщений

const renderList = smt => {

    let listHTML = "";
    smt.forEach(item => {
        listHTML += `
            <div class="${item.isMyMessage ? "user__message" : "user__message2"}">
                <div class="user__message__text">
                    ${item.message}
                </div>
                <div class="user__message__time">
                    ${item.time}
                </div>
                <div class="user__message__name">
                    ${item.user}
                </div>
            </div>
        `;
    });
    list.innerHTML = listHTML;
   }
;

renderList(arr);




// функция для сайдбара

const renderSidebar = smt => {

    let listHTML = "";
    smt.forEach(item => {
        listHTML += `
        
            <div class="sidebar__message">
                <img class="sidebar__message__img" src=" ${item.isMyMessage ? "img/wa.png" : "img/sb.jpg" } ">
                <div class="sidebar__message__body">
                    <div class="sidebar__message__title">
                        <div class="sidebar__meassage__name">
                            ${item.user}
                        </div> 
                        <div class="sidebar__meassage__day">
                            ${item.day}
                        </div>
                    </div>
                    <div class="sidebar__message__text">
                        ${item.message}
                    </div>
                </div>
            </div>   
        
        `;
    });
    side.innerHTML = listHTML;
   }
;

renderSidebar(arr);
