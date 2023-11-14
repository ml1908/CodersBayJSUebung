const readline = require('readline');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute(){
    const zahl = await prompt("Gib eine beliebige Zahl ein: ");
    
    if (zahl % 2 === 0){
        console.log("Zahl ist gerade")
    }else if (zahl % 2 === !0){
        console.log("Zahl ist ungerade")
    }else{
        console.log("Es ist eine Kommazahl")
    }
    


}
execute().catch((err) => {console.error(err); }).finally(()=> rl.close());