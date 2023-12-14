import {readFile, writeFile} from 'node:fs';
import readline from 'readline'; // readline kommt von readline, genauso wie readFile von node:fs kommt

const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));


let dataString = '[]';
let productsArray;
const fileName = 'data.json';

readFile(fileName, 'utf8', async (err, data) => {

    handleJsonFile(err, data);

    do {
            let choice = await prompt("Was möchten Sie tun? (a) Hinzufügen, (f) Finden, (x) Speichern und Beenden: ");
            switch (choice.toLowerCase()) {
                case 'a':
                    await addProduct(productsArray);
                    break;
                case 'd':
                    deleteProduct();
                    break;
                case 'f':
                    await findProduct();
                    break;
                case 'x':
                    //saveAndExit();
                    break;
                default:
                    console.log('Ungültige Eingabe. Bitte wählen Sie a, f oder x.');
                    return;
            }
            rl.close();
            
    }
    while (true)
});

function handleJsonFile(err, data) {
    console.log("HJF - err", err)
    console.log("HJF - data", data)
    if (err) {
        console.error("Error reading file");
        writeFile('data.json', dataString, 'utf8', (err) => {
            if (err) {
                console.error('Error writing file')
            } else {
                console.log('File is ready')
            }
        });

        productsArray = JSON.parse(dataString);
    } else {
        productsArray = JSON.parse(data)
    }
}

async function addProduct(productsArray) {

    let id = await prompt('Produktnummer: ');
    let name = await prompt('Bezeichnung: ');
    let price = await prompt('Preis: ');

    let product = {
        id: id,
        name: name,
        price: price
    };
    console.log(product)
    
    productsArray.push(product);
    console.log(productsArray)
    saveAndExit();
}

function saveAndExit() {
    console.log("beforewrite - productsArray:", productsArray)
    const dataToWrite = JSON.stringify(productsArray);
    console.log("beforewrite - dataToWrite:", dataToWrite)

    writeFile(fileName, dataToWrite, 'utf8', (err) => {
        if (err) {
            console.error('Fehler beim Speichern der Datei');
        } else {
            console.log('Daten erfolgreich gespeichert');
        }
        process.exit(0);
    });
}