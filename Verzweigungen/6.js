const readline = require('readline');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute(){
    const zahl1 = parseFloat(await prompt("Erste Zahl: "));
    const zahl2 = parseFloat(await prompt("Zweite Zahl: "));
    const op = await prompt("Operator: ");
    let ergebnis;
    
    
    switch (op){
        case '+':
            ergebnis = zahl1 + zahl2;
            break;
        case '-':
            ergebnis = zahl1 - zahl2;
            break;
        case '*': 
            ergebnis = zahl1 * zahl2;
            break;
        case '/':
            ergebnis = zahl1 / zahl2;
            break; 
    }
    console.log(zahl1 + op + zahl2 + "=" + ergebnis);
    

}
execute().catch((err) => {console.error(err); }).finally(()=> rl.close());