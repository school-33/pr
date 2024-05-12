let themeNode = document.querySelector('#theme');

let firstNode = document.querySelector('#first');
let secondNode = document.querySelector('#second');
let thirdNode = document.querySelector('#third');

let firstsNode = document.querySelector('#firsts');
let secondsNode = document.querySelector('#seconds');
let thirdsNode = document.querySelector('#thirds');

let firsts =`
Джокер;
Преступление и наказание;
Assassin's Creed;
Шерлок Холмс;
Asper X.`;
let seconds =
`Игра в имитацию;
Чернокнижец;
Syberia;
1899;
Электрофорез.`;
let thirds =`
Побег из Шоушенка;
Палата №6;
Detroit: Become Human;
Чернобыль;
ПОЛМАТЕРИ.`;


let lthemeNode = 'Светлая тема: ☀️';
let dthemeNode = 'Тёмная тема:🌙';
let currentTheme = document.body.className;

themeNode.addEventListener('click', function() {
    if (themeNode.innerHTML === lthemeNode) {
      themeNode.innerHTML = 'Тёмная тема:🌙';
      document.body.className = 'dark';
    } else if (themeNode.innerHTML === dthemeNode) {
      themeNode.innerHTML ="Светлая тема: ☀️";
      document.body.className = 'light-theme';
    }
});

firstNode.addEventListener('click', function(){
  firstsNode.textContent = firsts;
});

secondNode.addEventListener('click', function(){
  secondsNode.textContent = seconds;
});

thirdNode.addEventListener('click', function(){
  thirdsNode.textContent = thirds;
});