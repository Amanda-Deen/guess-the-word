// HTML Links
const guessedLettersElement = document.querySelector(".guessed-letters") // <ul> - player's guessed letters will appear
const guessButton = document.querySelector(".guess") // Guess! Button
const inputLetter = document.querySelector(".letter") // Text input - player guesses a letter
const wordInProgress = document.querySelector(".word-in-progress") // <p> - word in progress appears
const remainingGuesses = document.querySelector(".remaining") // <p> - remaining guesses display
const remainingSpan = document.querySelector(".remaining span") // <span> # of guesses apear
const inputMessage = document.querySelector(".message") // <p> - message appears when player guesses letter
const playAgainButton = document.querySelector(".play-again") // Play again button


const word = "mognolia";
const  guessedLetters = [];

// New word placeholder for letters
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    };
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

// Guess Button Event Listeners
guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    inputMessage.innerText = ""; //Empty message <p>
    const guess = inputLetter.value; //Grab Input
    // console.log(guess);
    const goodGuess = checkInput(guess); //Check input
    if (goodGuess) {
        makeGuess(guess);
    }
    inputLetter.value = "";
});

guessButton.addEventListener("keydown", function (e) {
    if (e.key == Enter) {
        e.preventDefault();
        inputMessage.innerText = ""; //Empty message <p>
        const guess = inputLetter.value; //Grab Input
        // console.log(guess);
        const goodGuess = checkInput(guess); //Check input
        if (goodGuess) {
            makeGuess(guess);
        }
        inputLetter.value = "";
    }
});   

// Check Players input
const checkInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        inputMessage.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        inputMessage.innerText = "Please enter only one letter.";
    } else if (!input.match(acceptedLetter)) {
        inputMessage.innerText = "Please enter a letter from A to Z.";
    } else {
        return input;
    };
};

// Capture Input
const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        inputMessage.innerText = "You already guessed that letter. Try again.";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
        showGuessedLetters();
        updateWordInProgress(guessedLetters);
    }

};

//Update the page w/ players guess
const showGuessedLetters = function() {
    guessedLettersElement.innerHTML = "";
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersElement.append(li);
    }
};

//Replace the ● w/ correct letter
const updateWordInProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    // console.log(wordArray);
    const revealWord = [];
    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            revealWord.push(letter.toUpperCase());
        } else {
            revealWord.push("●");
        }
    }
    // console.log(revealWord);
    wordInProgress.innerText = revealWord.join("");
    checkIfWon();
};

//Check if successfully guessed the word
const checkIfWon = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {
        inputMessage.classList.add("win");
        inputMessage.innerHTML = `<p class="highlight">You guessed the correct word! Congradulations!</p>`;
    }
};
