const lettersDiv = document.querySelector(`#qwerty`);
const phraseDiv = document.querySelector(`#phrase`);
const missed = 0;
const start = document.querySelector('.start');
const phrases = [
    `what do you mean`,
     `This is an array`,
     `what is your name`,
     `this is cool`,
     `Practicing javascript`
];


// listen for the start game button to be pressed
start.addEventListener('click', (e) => {
    e.preventDefault();
    if (start.style.display === `none`) {
        start.style.display = `block`;
    } else {
        start.style.display = `none`;
    }
});

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
        if(button.target.textContent === ulLetters[i].textContent){
            ulLetters[i].className = `show`;
            match = ulLetters[i].textContent;
        }
        return match;
    }
}

// Listen for the onscreen keyboard to be clicked
lettersDiv.addEventListener(`click`, (e) => {
    let chosen = e.target;
    if(chosen === `BUTTON`){
        chosen.className = `chosen`;
        chosen.disable = true;
        checkLetter(chosen);
    }
})

// Check if the game has been won or lost

