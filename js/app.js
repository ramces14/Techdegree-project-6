const lettersDiv = document.querySelector(`#qwerty`);
const phraseDiv = document.querySelector(`#phrase`);
let missed = 0;
const overlay = document.querySelector('#overlay');
const button = document.querySelector(`.btn_reset`);

const refreshPage = () => {
    location.reload();
} 

const phrases = [
    `hello world`,
     `this is an array`,
     `what is your name`,
     `this is cool`,
     `javascript is cool`
];

// return a random pharse from array
function getRandomPhraseAsArray(arr){
    for(let i = 0; i < arr.length; i += 1){
        let randomPhrase = arr[Math.floor(Math.random()*arr.length)];
        return randomPhrase;
    }
}

const phraseArray = getRandomPhraseAsArray(phrases);

// Adds the letters of a string to the display
function addPhraseToDisplay(arr){
    let ul = document.getElementById(`words`);

    for(let i = 0; i < arr.length; i += 1){
        if(arr[i] === ' '){
            let li = document.createElement(`li`);
            li.className = `space`;
            li.textContent = arr[i];
            ul.appendChild(li);
        } else {
            let li = document.createElement(`li`);
            li.className = `letter`;
            li.textContent = arr[i];
            ul.appendChild(li);
        }
    }
}

addPhraseToDisplay(phraseArray);

// Check if a letter is in the phrase
function checkLetter(button){
    let ulLetters = document.getElementsByClassName(`letter`);
    let match = null;
    for(let i = 0; i < ulLetters.length; i += 1){
        if(button.textContent === ulLetters[i].textContent){
            ulLetters[i].classList.add(`show`);
            match = ulLetters[i].textContent;
        } else{
            match = match;
        }
    }
    return match;
}

// Check if the game has been won or lost

function checkWin(){
    let show = document.getElementsByClassName(`show`);
    let letter = document.getElementsByClassName(`letter`);
    if(show.length === letter.length){
        overlay.className = `win`;
        let win = document.querySelector(`.win`);
        win.style.display = `flex`;
        let button = document.querySelector(`a`);
        button.textContent = `Try again!`;
        let h1 = document.createElement(`h1`);
        h1.textContent = `You Win!`
        overlay.appendChild(h1);
    }
    if(missed > 4){
        overlay.className = `lose`;
        let lose = document.querySelector(`.lose`);
        lose.style.display = `flex`;
        let button = document.querySelector(`a`);
        button.textContent = `Try again!`;
        let h1 = document.createElement(`h1`);
        h1.textContent = `You lost!`
        overlay.appendChild(h1);
    }
}

// listen for the start game button to be pressed

overlay.addEventListener('click', (e) => {
    if(overlay.className === 'start'){
        e.preventDefault();
        if (overlay.style.display === `none`) {
            overlay.style.display = `block`;
        } else {
            overlay.style.display = `none`;
        }
    } else {
        refreshPage();
    }
});

// Listen for the onscreen keyboard to be clicked
lettersDiv.addEventListener(`click`, (e) => {
        let chosen = e.target;
        if(chosen.tagName === `BUTTON`){
            chosen.className = `chosen`;
            chosen.disabled = true;
            let letterFound = checkLetter(chosen);
            if(letterFound === null){
                missed += 1;
                let ol = document.getElementsByTagName(`OL`)[0];
                let heart = document.querySelector(`.tries:last-child`);
                ol.removeChild(heart);
            } else{
                missed += 0;
            }
            
            checkWin();
        }
});



