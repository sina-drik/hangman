const wordsArray = ['book', 'kitchen', 'ruler', 'football', 'knife', 'nurse', 'carpet', 'table'];
let underScoreSection = document.getElementById('clue').querySelector('p');
let image = document.getElementById('image').querySelector('img');
let letters = document.getElementById('letters');
let mistakes = 0
let randomWord = '';
let splittedWord = ''
let clicked = [];
let pressed;
let result;

function start() {
    const randomNumber = Math.floor(Math.random() * wordsArray.length);
    randomWord = wordsArray[randomNumber];
    window.addEventListener('keypress', buttonletter)
    letters.addEventListener('click', clickletter)
    console.log(randomWord);
    splittedWord = randomWord.split('');
    showunderscore();


}
function setunderscore(input) {
    input = input.toLowerCase();
    clicked.push(input)
    showunderscore();
}
function showunderscore() {
    let wordholder = splittedWord.map(function (item) {
        if (clicked.indexOf(item) >= 0) {
            return item
        } else {
            return '_'
        }
    })
    result = wordholder.join('');
    checkifwon(result, randomWord)
    // image.src='assets/hangman0.png'
    underScoreSection.innerText = result
}

function clickletter(item) {
    item.target.className = 'used noclick';
    let q = item.target.id;
    q = q.toLowerCase()
    clickandbutton(q)
}
function buttonletter(input) {
    let q = input.key
    clickandbutton(q);
}
function clickandbutton(item) {
    if (splittedWord.indexOf(item) >= 0) {
        setunderscore(item);

    } else {
        mistakes++
        checkiflost(mistakes);
        if (mistakes > 5) {
            underScoreSection.innerText = 'Game Over'
            underScoreSection.style.color = 'red'
            letters.style.display = 'none';
        }
    }
}

function checkifwon(input1, input2) {
    if (input1 == input2) {
        image.src = 'assets/winner.png'
    }
}
function checkiflost(input) {
    image.src = `assets/hangman${input}.png`
}

start();


