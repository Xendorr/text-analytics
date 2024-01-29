const textareaEl = document.querySelector('.textarea');
const charactersNumberEl = document.querySelector('.stat__number--characters');
const wordsNumberEl = document.querySelector('.stat__number--words');
const twitterNumberEl = document.querySelector('.stat__number--twitter');
const facebookNumberEl = document.querySelector('.stat__number--facebook');
const sentencesNumberEl = document.querySelector('.stat__number--sentences');
const phrasesNumberEl = document.querySelector('.stat__number--phrases');
const infoEl = document.querySelector('.info__button');
const descriptionEl = document.querySelector('.info')

const inputHandler = () => {
    //input validation
    if(textareaEl.value.includes('<script>')) {
        alert('You can\'t use <script> in your text!');
        textareaEl.value = textareaEl.value.replace('<script>', '');
    }

    //determine new numbers
    const numberOfCharacters = textareaEl.value.length;
    const twitterCharactersLeft = 280 - numberOfCharacters;
    const facebookCharactersLeft = 2200 - numberOfCharacters;
    let numberOfWords = textareaEl.value.split(' ').length;
    if (numberOfCharacters === 0) {
        numberOfWords = 0;
    }
    const numberOfSentences = textareaEl.value.split(/[.?!\n]/g).filter(Boolean).length;
    let numberOfPhrases = textareaEl.value.split(/\n/g).filter(Boolean).length;
    //add visual indicators if limit is exceeded

    twitterCharactersLeft < 0 ? twitterNumberEl.classList.add('stat__number--limit') : twitterNumberEl.classList.remove('stat__number--limit')
    facebookCharactersLeft < 0 ? facebookNumberEl.classList.add('stat__number--limit') : facebookNumberEl.classList.remove('stat__number--limit');

    //set new numbers
    charactersNumberEl.textContent = numberOfCharacters;
    twitterNumberEl.textContent = twitterCharactersLeft;
    facebookNumberEl.textContent = facebookCharactersLeft;
    wordsNumberEl.textContent = numberOfWords;
    sentencesNumberEl.textContent = numberOfSentences;
    phrasesNumberEl.textContent = numberOfPhrases;
};

textareaEl.addEventListener('input', inputHandler);
infoEl.addEventListener('mouseenter', () => { descriptionEl.classList.add('info--visible')});
descriptionEl.addEventListener('mouseleave', () => { descriptionEl.classList.remove('info--visible')});