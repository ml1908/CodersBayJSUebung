const readline = require('readline');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute(){
    const zahl = await prompt("Gib eine beliebige Zahl ein: ");
    
    if (zahl % 1 > 0){
        console.log("Es ist eine Kommazahl")
    }else if (zahl % 2 === 0){
        console.log("Zahl ist gerade")
    }else{
        console.log("Zahl ist ungerade")
    }
    


}
execute().catch((err) => {console.error(err); }).finally(()=> rl.close());