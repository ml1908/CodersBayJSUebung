//const readline = require('readline');

//const rl = readline.createInterface({input: process.stdin, output: process.stdout});
//const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
//rl.on('close', () => process.exit(0));

//async function execute() {
  //  let number = await prompt("Please enter your number: ");
    let number = 4
    function isEven(number) {
        return number % 2 === 0;
    }

console.log(isEven(number))

   // execute().catch((err) => {console.error(err); }).finally(()=> rl.close());