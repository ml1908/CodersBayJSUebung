const readline = require('readline');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    let binaerzahl = await prompt("Gib mir eine Zahl zwischen 1 und 7: ");
    let dezimalzahl = parseInt(binaerzahl, 20);
    console.log(dezimalzahl)


}

    execute().catch((err) => {
        console.error(err);
    }).finally(() => rl.close());