const readlineSync = require('readline-sync');

/* Import functions the riddle.js */
const {generate_random_number, check_riddle} = require('./riddle');

/* The user set an number and I parse it to integer */
const getUserNumber = () => {
    return parseInt(readlineSync.question('Ingrese un número: ')); 
};

const guessingGame = () => {
    const secretNumber = generate_random_number();
    let guessedNumber = 0;

    console.log('¡Bienvenido a Adivina el número secreto!');
    console.log('Intenta adivinar el núme56ro del 1 al 100. \n');

    while(guessedNumber !== secretNumber) {
        /* Change the default number of gussedNumber to the number that comes with the getUserNumber function  */
        guessedNumber = getUserNumber();
        /* The function that comes from riddle.js is executed */
        check_riddle(secretNumber, guessedNumber);
    }
};

guessingGame()


