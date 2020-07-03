     //-------------1------------------   
     
        // printNumbers = (from, to) => {

        //     let interval = setInterval(() => {
        //         console.log(from);

        //         if (from == to) {
        //             clearInterval(interval);
        //         }

        //         from++;
        //     }, 1000);
        // }
        // printNumbers (3, 9);

    //-------------1------------------ 








    //-------------2------------------ 

    // printNumbers = (from, to, time) => {

    //         setTimeout( interval = () => {
    //             console.log(from);
    //             if (from < to) {   
    //                 setTimeout(interval, time);
    //             }   
    //             from++;
    //         }, 0);
    // }

    // printNumbers(1, 20, 100);
  

    //-------------2------------------ 








    //-------------3------------------

     // основная функция
    notify = (time, text) => {
        let btn = document.querySelector("button");
        let close = document.querySelector(".close");
        let window = document.querySelector(".notification");
        let mes = document.querySelector(".message");
        let listHTML = "";
    // открытие окна по клику и закрытие через время
        btn.addEventListener("click", () => {
            window.style.display = "inherit";
            setTimeout(function(){
                window.style.display = "none"; 
            }, time);
        });

        listHTML += `
            <div class="text">
                ${text}
            </div>
        `;
    // функция закрытия по клику на крестик       
        turnOffNotification = () => {
            close.addEventListener("click", () => {
                window.style.display = "none";
            });
        };

        turnOffNotification();
        mes.innerHTML = listHTML;
    };

    notify(6000, 'How are you?');


    //-------------3------------------