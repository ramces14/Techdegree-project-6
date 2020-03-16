const lettersDiv = document.querySelector(`#qwerty`);
const phraseDiv = document.querySelector(`#phrase`);
const missed = 0;
const start = document.querySelector('.start');

// listen for the start game button to be pressed
start.addEventListener('click', (e) => {
    e.preventDefault();
    if (start.style.display === `none`) {
        start.style.display = `block`;
    } else {
        start.style.display = `none`;
    }
});

const phrases = [
    `what do you mean`,
     `This is an array`,
     `what is your name`,
     `this is cool`,
     `Practicing javascript`
];

// return a random pharse from array
function getRandomPhraseAsArray(arr){
    for(let i = 0; i < arr.length; i += 1){
        let randomPhrase = arr[Math.floor(Math.random()*arr.length)];
        return randomPhrase;
    }
}

const phraseArray = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr){
    for(let i = 0; i < arr.length; i += 1){
        if(arr[i] === ''){
            let ul = document.getElementById(`words`);
            let li = document.createElement(`li`);
            li.className = `space`;
            li.textContent = arr[i];
            ul.appendChild(li);
        } else {
            let ul = document.getElementById(`words`);
            let li = document.createElement(`li`);
            li.className = `letter`;
            li.textContent = arr[i];
            ul.appendChild(li);
        }
    }
    let space = document.getElementsByClassName(`space`);
    ul.removeChild(`space`);
}

addPhraseToDisplay(phraseArray);
