const readline = require('readline');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const bs = await prompt("Gib mir einen Buchstaben: ");{
    switch (bs){
        case 'a':
            console.log("Vokal");
            break;
        case 'b':
        case 'c':
        case 'd':
            console.log("Konsonant")
            break;
        case 'e':
            console.log("Vokal");
            break;
        case 'f':
        case 'g':
        case 'h':
            console.log("Konsonant")
            break;
        case 'i':
            console.log("Vokal");
            break;        
        case 'j':
        case 'k':
        case 'l':
        case 'm':
        case 'n':
            console.log("Konsonant")
            break;
        case 'o':
            console.log("Vokal");
            break;
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
            console.log("Konsonant")
            break;
        case 'u':
            console.log("Vokal");
            break;
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
            console.log("Konsonant")
            break;
        default:
            console.log("Ohje")
            break;
            
            
            
            
            
    }
    }
    }
execute().catch((err) => {console.error(err); }).finally(()=> rl.close());