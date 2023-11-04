const readline = require('readline');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute(){
    const password = await prompt("Please enter your password: ");
    if(password === '123456'){
        console.log('Das Password ist korrekt')
    } else {
        console.log('Passwort ist falsch versuch es nochmal.')
    }
    

}
execute().catch((err) => {console.error(err); }).finally(()=> rl.close());