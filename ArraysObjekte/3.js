
const readline = require('readline');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function rowColumn(){
    const row = parseFloat(await prompt("Zeilennummer?"));
    const column = parseFloat(await prompt("Spaltennummer?"));

    
    const field = [
        ["Vorname", "Nachname", "Alter"]
        ["Hans", "Mueller", 22],
        ["Georg", "Huber", 37],
        ["Fritz", "Mayr", 19],
    ];

    console.log(field[row][column])

}
rowColumn().catch((err) => {console.error(err); }).finally(()=> rl.close()); 