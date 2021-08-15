console.log('TEST')


//window.addEventListener("DOMContentLoaded", testTimerStart);

function testTimerStart() {
  console.log('Страница загрузилась. Начался обратный отсчёт таймера!')  
}

const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]')
}

//start: document.querySelector('[data-action="start"]'),


let startDate = Date.now();// Получаем точное время запуска таймера (момент времени , когда загрузилась наша страница)
console.log('startDate = ', startDate);


const targetDate = new Date (2022, 0, 1, 0, 0, 0, 0); // Конечная дата остановки таймера
console.log('targetDate = ', targetDate )

let idTimer = null; //идентификатор таймера обратного отсчёта

//Это функция, которая будет выполнятся постоянно, пока тикает интервал (таймер обратного отсчёта). 
//Передаём её в  setInterval
function culcTime() {
    const currentDate = Date.now();
    const delta = targetDate - currentDate;
    console.log("delta = ", delta);

    //Путём деления получившихся милисекунд вычисляем секунды, минуты, часы, дни
    const days = Math.floor(delta / (1000 * 60 * 60 * 24)); 
    const hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((delta % (1000 * 60)) / 1000);

    console.log(`days: ${days}, hours: ${hours}, mins: ${mins}, secs: ${secs}`);
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
}

// Это функция-обвёртка, которая передаётся в обработчик и запускается по событию, например клику кнопки.
//Если в слушатель события сразу поставить вызов setInterval, то он запустится сразу зез клика. Но в данной заддаче нас это устраивает
function timerStart() {
    idTimer = setInterval(culcTime, 1000);
 }


window.addEventListener("DOMContentLoaded", timerStart);


 console.log('targetDate - startDate  = ', targetDate - startDate  )


 /*
window.addEventListener("click", stopTimer);
 
function stopTimer() {
    console.log("Таймер остановлен");
    clearInterval(idTimer);
}
*/



