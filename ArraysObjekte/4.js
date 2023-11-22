const readline = require('readline');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const row = parseFloat(await prompt("Zeilennummer?"));
    const column = await prompt("Spaltenname (Vorname, Nachname, Alter)?");

    const field = [
        ["Hans", "Mueller", 22],
        ["Georg", "Huber", 37],
        ["Fritz", "Mayr", 19],
    ];
    const columnNames =
        {
            Vorname: 0,
            Nachname: 1,
            Alter: 2
        };
    
    if (column === "Vorname") {
        console.log(`Der Wert in Zeile ${row - 1}, Spalte ${column} ist: ${result}`);
        console.log(field [row - 1][columnNames.Vorname])
    } else if (column === "Nachname") {
        console.log(`Der Wert in Zeile ${row - 1}, Spalte ${column} ist: ${result}`);
        console.log(field [row - 1][columnNames.Nachname])
    } else if (column === 'Alter') {
        console.log(`Der Wert in Zeile ${row - 1}, Spalte ${column} ist: ${field [row - 1][columnNames.Alter]}`);
        console.log(field [row - 1][columnNames.Alter]);
    } else {
        console.log("Ungültiger Spaltenname");
    }
    console.log(`Der Wert in Zeile ${row - 1}, Spalte ${column} ist: ${result}`);
    
}
    execute().catch((err) => {
        console.error(err);
    }).finally(() => rl.close()); 

