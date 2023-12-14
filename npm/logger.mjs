import chalk from 'chalk';



let text = 'Wie gehts dir'
function logRed(text){
    console.log(chalk.red(text));
}
function logGreen(text){
    console.log(chalk.green(text));
}

function logBlue(text){
    console.log(chalk.blue(text));
}

function logYellow(text){
    console.log(chalk.yellow(text));
}

logRed(text)
logGreen(text)
logBlue(text)
logYellow(text)


export { logRed, logGreen, logBlue, logYellow };



const name = 'Michael';
console.log(chalk.red('Hello %s'), name);
console.log(chalk.blue('Hello ') + name + chalk.red('!'));
console.log(chalk.green('How are u?'))

console.log(chalk.green('Merry Christmas'))