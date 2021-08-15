console.log('TEST')


//window.addEventListener("DOMContentLoaded", testTimerStart);

function testTimerStart() {
  console.log('Страница загрузилась. Начался обратный отсчёт таймера!')  
}



let startDate = Date.now();// Получаем точное время запуска таймера (момент времени , когда загрузилась наша страница)
console.log('startDate = ', startDate);


const targetDate = new Date (2022, 0, 1, 0, 0, 0, 0); // Конечная дата остановки таймера
console.log('targetDate = ', targetDate )

let idTimer = null; //идентификатор таймера обратного отсчёта

//Это функция, которая будет выполнятся постоянно, пока тикает интервал (таймер обратного отсчёта). 
//Передаём её в  setInterval
function logger() {
    console.log("run")
}

// Это функция-обвёртка, которая передаётся в обработчик и запускается по событию, например клику кнопки.
//Если в слушатель события сразу поставить вызов setInterval, то он запустится сразу зез клика. Но в данной заддаче нас это устраивает
function timerStart() {
    idTimer = setInterval(logger, 1000);
 }

//idTimer = setInterval(logger, 1000);

window.addEventListener("DOMContentLoaded", timerStart);


