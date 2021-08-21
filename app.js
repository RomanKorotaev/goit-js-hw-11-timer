

class CountdownTimer {
    constructor() {
         this.refs = {
            days: document.querySelector('[data-value="days"]'),
            hours: document.querySelector('[data-value="hours"]'),
            mins: document.querySelector('[data-value="mins"]'),
            secs: document.querySelector('[data-value="secs"]')
         }
        this.idTimer = null; //идентификатор таймера обратного отсчёта
        this.targetDate = new Date(2022, 0, 1, 0, 0, 0, 0);;

        window.addEventListener("DOMContentLoaded",  this.timerStart);
        this.timerStart = this.timerStart.bind(this);
    }
    
    //----------------Методы класса

    //Это функция, которая будет выполнятся постоянно, пока тикает интервал (таймер обратного отсчёта). 
    //Передаём её в  setInterval
    culcTime() {
        const currentDate = Date.now();
        const delta = this.targetDate - currentDate;
        console.log("delta = ", delta);

        //Путём деления получившихся милисекунд вычисляем секунды, минуты, часы, дни
        const days = Math.floor(delta / (1000 * 60 * 60 * 24)); 
        const hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((delta % (1000 * 60)) / 1000);

        console.log(`days: ${days}, hours: ${hours}, mins: ${mins}, secs: ${secs}`);
        this.refs.days.textContent = days < 10 ? `0${days}` : days; // добавляем впереди нолик, если число меньше 10
        this.refs.hours.textContent = hours < 10 ? `0${hours}` : hours; // добавляем впереди нолик, если число меньше 10
        this.refs.mins.textContent = mins < 10 ? `0${mins}` : mins; // добавляем впереди нолик, если число меньше 10
        this.refs.secs.textContent = secs < 10 ? `0${secs}` : secs; // добавляем впереди нолик, если число меньше 10
    }

    timerStart() {
        console.log("Запуск функции  timerStart")
        this.idTimer = setInterval(this.culcTime, 1000);
        
    }

    init() {
        window.addEventListener("DOMContentLoaded",  this.timerStart);
    }
}

// const targetDate = new Date(2022, 0, 1, 0, 0, 0, 0); // Конечная дата остановки таймера
// console.log('targetDate = ', targetDate )

const timer = new CountdownTimer()
timer.init();

//-----------------------   работающий таймер обратного отсчёта (без классов)  -------------

// const refs = {
//     days: document.querySelector('[data-value="days"]'),
//     hours: document.querySelector('[data-value="hours"]'),
//     mins: document.querySelector('[data-value="mins"]'),
//     secs: document.querySelector('[data-value="secs"]')
// }



// const targetDate = new Date (2022, 0, 1, 0, 0, 0, 0); // Конечная дата остановки таймера
// console.log('targetDate = ', targetDate )

// let idTimer = null; //идентификатор таймера обратного отсчёта

//  //Это функция, которая будет выполнятся постоянно, пока тикает интервал (таймер обратного отсчёта). 
//  //Передаём её в  setInterval
// function culcTime() {
//     const currentDate = Date.now();
//     const delta = targetDate - currentDate;
//     console.log("delta = ", delta);

//     //Путём деления получившихся милисекунд вычисляем секунды, минуты, часы, дни
//     const days = Math.floor(delta / (1000 * 60 * 60 * 24)); 
//     const hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const mins = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
//     const secs = Math.floor((delta % (1000 * 60)) / 1000);

//     console.log(`days: ${days}, hours: ${hours}, mins: ${mins}, secs: ${secs}`);
//     refs.days.textContent = days < 10 ? `0${days}` : days; // добавляем впереди нолик, если число меньше 10
//     refs.hours.textContent = hours < 10 ? `0${hours}` : hours; // добавляем впереди нолик, если число меньше 10
//     refs.mins.textContent = mins < 10 ? `0${mins}` : mins; // добавляем впереди нолик, если число меньше 10
//     refs.secs.textContent = secs < 10 ? `0${secs}` : secs; // добавляем впереди нолик, если число меньше 10
// }

//   //Это функция-обвёртка, которая передаётся в обработчик и запускается по событию, например клику кнопки.
//  //Если в слушатель события сразу поставить вызов setInterval, то он запустится сразу зез клика. Но в данной заддаче нас это устраивает
// function timerStart() {
//     idTimer = setInterval(culcTime, 1000);
//  }

//  //запуск таймера начинается по событию загрузки страницы
// window.addEventListener("DOMContentLoaded", timerStart);








