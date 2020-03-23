const lettersDiv = document.querySelector(`#qwerty`);
const phraseDiv = document.querySelector(`#phrase`);
let missed = 0;
const start = document.querySelector('.start');
const tries = document.getElementsByClassName(`tries`);
const phrases = [
    `what do you mean`,
     `this is an array`,
     `what is your name`,
     `this is cool`,
     `practicing javascript`
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
        if(button.textContent === ulLetters[i].textContent){
            ulLetters[i].classList.add(`show`);
            match = ulLetters[i].textContent;
        } else{
            match = null;
        }
    }
    return match;
}

// Listen for the onscreen keyboard to be clicked
lettersDiv.addEventListener(`click`, (e) => {
        let chosen = e.target;
        if(chosen.tagName === `BUTTON`){
            chosen.className = `chosen`;
            chosen.disable = true;
            let letterFound = checkLetter(chosen);
            if(letterFound === null){
                missed += 1;
                let ol = document.getElementsByTagName(`OL`)[0];
                let heart = document.getElementsByTagName(`img:last-child`);
                ol.removeChild(heart);
            } else{
                missed += 0;
            }
        } 

})


// Check if the game has been won or lost

