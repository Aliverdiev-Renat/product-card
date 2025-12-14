const productCard = document.querySelector('.card');
const productCardList = document.querySelectorAll('.card');
const changeColorCardButton = document.querySelector('#change-color-card-button');
const changeColorAllCardButton = document.querySelector('#change-color-all-card-button');
const blueColorHash = 'rgba(0, 162, 255, 1)'
const greenColorHash = 'rgba(0, 255, 0, 1)'

// Покраска одной карточки
changeColorCardButton.addEventListener('click', () => {
  productCard.style.backgroundColor = blueColorHash;
})

//Покраска всех карточек
changeColorAllCardButton.addEventListener('click', () => {
  productCardList.forEach((card) => card.style.backgroundColor = greenColorHash);
})

//открыть google
const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть google?');

  if (answer === true) {
    window.open('https://google.com')
  } else{
    return;
  }
}

// Вывод в консоль лог
const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №4'))

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}

// Вывод header-card__text в консоль лог
const headerOutputText = document.querySelector('.header-card__text');

headerOutputText.addEventListener('mouseenter', () => {
  console.log(headerOutputText.textContent)
})

// Кнопка которая меняет свой цвет с одного на другой
const buttonColorGeneration = document.querySelector('#color-generation');

buttonColorGeneration.addEventListener('click', () => {
  if (buttonColorGeneration.classList.toggle('greenColorHash')) {
    buttonColorGeneration.style.backgroundColor = greenColorHash
  } else {
    buttonColorGeneration.style.backgroundColor = blueColorHash
  }
})