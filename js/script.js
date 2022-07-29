// HTML Links
const guessedLetters = document.querySelector(".guessed-letters") // <ul> - player's guessed letters will appear
const guessButton = document.querySelector(".guess") // Guess! Button
const inputLetter = document.querySelector(".letter") // Text input - player guesses a letter
const wordInProgress = document.querySelector(".word-in-progress") // <p> - word in progress appears
const remainingGuesses = document.querySelector(".remaining") // <p> - remaining guesses display
const remainingSpan = document.querySelector(".remaining span") // <span> # of guesses apear
const inputMessage = document.querySelector(".message") // <p> - message appears when player guesses letter
const playAgainButton = document.querySelector(".play-again") // Play again button


const word = "mognolia";

// New word placeholder for letters
const newWord = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    };
    wordInProgress.innerText = placeholderLetters.join("");
};

newWord(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = inputLetter.value;
    console.log(guess);
    inputLetter.value = "";
});

guessButton.addEventListener("keydown", function (e) {
    if (e.key == Enter) {
        e.preventDefault();
        const guess = inputLetter.value;
        console.log(guess);
        inputLetter.value = "";
    }
});
