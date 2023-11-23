const readline = require('readline');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const num1 = await prompt("Erste Zahl: ");
    const num2 = await prompt("Zweite Zahl: ");
    const num3 = await prompt("Dritte Zahl: ");
    const num4 = await prompt("Vierte Zahl: ")
    const highestNumber =
        (num1 >= num2 && num1 >= num3 && num1 >= num4) ? num1 :
            (num2 >= num1 && num2 >= num3 && num2 >= num4) ? num2 :
                (num3 >= num1 && num3 >= num2 && num3 >= num4) ? num3 : num4;

    console.log("Die höchste Zahl ist:", highestNumber);
    
    /*const werIsOlder = num1 >= num2 ? 'du bist older' : 'du bist juenger'
    console.log(werIsOlder)*/

    /*if (zahl1 > zahl2 && zahl1 > zahl3 && zahl1 > zahl4) {
        console.log(zahl1 + " ist die größte Zahl")
    } else if (zahl2 > zahl1 && zahl2 > zahl3 && zahl2 > zahl4) {
        console.log(zahl2 + " ist die größte Zahl")
    } else if (zahl3 > zahl1 && zahl3 > zahl2 && zahl3 > zahl4) {
        console.log(zahl3 + " ist die größte Zahl")
    } else {
        console.log(zahl4 + " ist die größte Zahl")
    }*/
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());