const readline = require('readline');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute(){
    const temp = await prompt("Wie viel Grad hat es: ");
    if(temp < 10) {
        console.log("Es ist kalt.");
    }else if (temp > 9 && temp < 20) {
        console.log("Es ist angenehm.");
    }else {
            console.log("Es ist heiß.");
    }
    
   


}
execute().catch((err) => {console.error(err); }).finally(()=> rl.close());