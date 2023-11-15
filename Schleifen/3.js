const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function player1(){
    let numberPlayer1;
    let isInputValid;
    
    do {
        numberPlayer1 = parseFloat(await prompt("Please enter your number: "));
        isInputValid = !Number.isNaN(numberPlayer1) && numberPlayer1 >= 1 && numberPlayer1 <= 100;
        
        
        console.clear()
        if (!isInputValid) {
            console.log('Invalid input');
        }
    } while (!isInputValid);
    
    return numberPlayer1;
}
async function playGame() {
    const wantedNumber = await player1();

    let counter = 0;
    let guessedNumber;

    do {
        guessedNumber = parseFloat(await prompt('Dein Ratenversuch: '));
        counter++;

        if (guessedNumber < wantedNumber) {
            console.log('Higher.');
        } else if (guessedNumber > wantedNumber) {
            console.log('Lower.');
        }
    } while (guessedNumber !== wantedNumber);

    console.log(`Herzlichen Glückwunsch! Du hast die Zahl ${wantedNumber} in ${counter} Versuchen erraten.`);
}

playGame().catch((err) => {console.error(err); }).finally(()=> rl.close());







    