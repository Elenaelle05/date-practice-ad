// Додатковий матеріал для самостійного ознайомлення
// Event loop documentation
// https://bool.dev/blog/detail/obyasnenie-event-loop-v-javascript-s-pomoshchyu-vizualizatsii
// https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif

// ***********setTimeout*********** \\// одноразовый вызов функции 

// console.log('before');

// const id = setTimeout(() => {
//     console.log('Time is over');
// }, 1000)
// console.log('after');

// console.time("for");

// for(let i = 0; i< 300000; i+= 1){
//     console.log("i => ",i);
// }
// console.timeEnd("for")

// Видалення Timeout за необхідністю
// clearTimeout(id)

// Можливість передати параметри для колбеку

// const id = setTimeout((name, country) => {
//     console.log(`Hello my name is ${name}, i am  from ${country}`);
// }, 1000, 'Alice', 'Ukraine')


// ***********setInterval*********** \\//многоразовый вызов функции

// const id = setInterval(() => {
//     console.log('setInterval');

// }, 1000)


// Видалення Timeout за необхідністю

// clearInterval(id)


// Можливість передати параметри для колбеку

// const id = setInterval((name, country) => {
//     console.log(`Hello my name is ${name}, i from ${country}`);
// }, 1000, 'Alice', 'Ukraine')

// Приклад використання setInterval та setTimeout
// Створимо блок з рекламою яка зникне через 10 секунд

// const content = document.querySelector('.js-content');
// const text = document.querySelector('.js-text');

// let counter = 10;
// text.textContent = `Осталось ${counter} секунд`;

// const id = setInterval(()=>{
//     counter -= 1;
//     text.textContent = `Осталось ${counter} секунд`;

// },1000)

// setTimeout(() => {
//     clearInterval(id);
//     content.style.display = 'none'; 
// },
// 1000 * counter) 




// ***********Синхронний та асинхронний JavaScript*********** \\



// ***********Class Date*********** \\


// const currentDate = new Date()
// console.log(currentDate);
// const month = currentDate.getMonth();
// const day = currentDate.getDay();
// console.log(day)
// console.log(month)

// const targetDate = new Date('March 05 2024');
// console.log(targetDate);

// console.log(targetDate - currentDate);


// Практика
// Потрібно створити два приклади годинника (Електронний та механічний)

const arrDay = [
    "Неділя",
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П`ятниця",
    "Субота",
];
const namesOfMonth = [
    "Січень",
    "Лютий",
    "Березень",
    "Квітень",
    "Травень",
    "Червень",
    "Липень",
    "Серпень",
    "Вересень",
    "Жовтень",
    "Листопад",
    "Грудень",
];

const elements = {
    day: document.querySelector('.date-day'),
    date: document.querySelector('.date'),
    month: document.querySelector('.date-month'),
    year: document.querySelector('.date-year'),
    clock : document.querySelector('.digital-clock'),
    seconds :document.querySelector('.clock-seconds__arrow'),
    minutes : document.querySelector('.clock-minutes__arrow'),
    hours : document.querySelector('.clock-hours__arrow')
}


setInterval(()=>{
    const currentDate = new Date();
const day = currentDate.getDay();
const date = currentDate.getDate();
const month = currentDate.getMonth();
const year= currentDate.getFullYear();

 
elements.day.textContent = arrDay[day];
elements.date.textContent = date;
elements.month.textContent = namesOfMonth[month];
elements.year.textContent = year;

const localTime = currentDate.toLocaleTimeString('en-GB');






const seconds = currentDate.getSeconds();
const minutes = currentDate.getMinutes();
const hours = currentDate.getHours();


const secondDeg = (360 / 60) * seconds;
const minutesDeg = (360 / 60) * minutes;
const hoursDeg = (360 / 12)* hours + (360 / 12 / 60) * minutes;

elements.seconds.style.transform = `rotate(${secondDeg}deg)`;

elements.minutes.style.transform = `rotate(${minutesDeg}deg)`;

elements.hours.style.transform = `rotate(${hoursDeg}deg)`;


elements.clock.textContent = `Текущее время ${localTime}`
}, 1000)










