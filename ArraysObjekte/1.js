const readline = require('readline');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute(){
    const number = parseFloat(await prompt("Sag mir eine Zahl zwischhen 1 - 7: "));
    
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    
    if(number === 1){
        console.log("Monday")
    } else if (number === 2){
        console.log("Tuesday")
    } else {
        console.log("Friday")
    }
    


}
execute().catch((err) => {console.error(err); }).finally(()=> rl.close()); 