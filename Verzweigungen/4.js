const readline = require('readline');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const zahl = await prompt("Gib mir eine Zahl zwischen 1 und 7: ");

    switch (zahl) {
        case '1':
            console.log("Montag");
            break;
        case '2':
            console.log("Dienstag");
            break;
        case '3':
            console.log("Mittwoch");
            break;
        case '4':
            console.log("Donnerstag");
            break;
        case '5':
            console.log("Freitag");
            break;
        case '6':
            console.log("Samstag");
            break;
        case '7':
            console.log("Sonntag");
            break;
    }


}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());