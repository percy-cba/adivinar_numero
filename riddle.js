
const generate_random_number = () => {
    return Math.floor((Math.random() * 100) + 1 )
}

const check_riddle = (secretNumber, guessedNumber) => {
    if(guessedNumber == secretNumber) {
        console.log('¡Felicitaciones!, ¡Adivinaste el número secreto!');
    } else if(guessedNumber > secretNumber){
        console.log('El número es es menor. ¡Sigue intentando!');
    } else {
        console.log('El número secreto es mayor. ¡Sigue intentando!');
    }
};

/* Export the tow functions */

module.exports = {
    generate_random_number,
    check_riddle
};
