const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {


    do {
        numberInput = parseFloat(await prompt('Please enter a number: '))

        isInputValid = !Number.isNaN(numberInput) && numberInput <= 8;

        if (!isInputValid) {
            console.log('Invalid input')

        } else if (numberInput === 1) {
            console.log('Monday')
        } else if (numberInput === 2) {
            console.log('Tuesday')
        } else if (numberInput === 3) {
            console.log('Wednesday')
        } else if (numberInput === 4) {
            console.log('Thursday')
        } else if (numberInput === 5) {
            console.log('Friday')
        } else if (numberInput === 6) {
            console.log('Saturday')
        } else if (numberInput === 7) {
            console.log('Sunday')
        }


    } while (!isInputValid);

    console.log(`Valid input: ${numberInput}`)


    //if(number >= 1 && number <= 7){
    //  const wochentag = wochentage[number - 1];
    //console.log(`Der ${number}. Tag ist ein ${wochentag}.`);


}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());