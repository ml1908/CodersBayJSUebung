const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute(){
    const number = await prompt("Please enter your password: ");
    
    const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]
    
    for(let i = 0; number < days.length; i++){
        console.log(days[number - 1]);
        return number;
    }
    
    //if(number >= 1 && number <= 7){
      //  const wochentag = wochentage[number - 1];
        //console.log(`Der ${number}. Tag ist ein ${wochentag}.`);
        


}
execute().catch((err) => {console.error(err); }).finally(()=> rl.close());