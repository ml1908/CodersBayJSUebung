import {readFile, writeFile} from 'node:fs';
import readline from 'readline'; // readline kommt von readline, genauso wie readFile von node:fs kommt

const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));


let dataString = '[]';
let productsArray;
const fileName = 'data222.json';

readFile(fileName, 'utf8', async (err, data) => {

    handleJsonFile(err, data);

    do {
        let choice = await prompt("Was möchten Sie tun? (a) Produkt Hinzufügen, (f) Produkt Finden, (d) Produkt löschen (x) Speichern und Beenden: ");
        switch (choice.toLowerCase()) {
            case 'a':
                await addProduct(productsArray);
                break;
            case 'd':
                await deleteProduct();
                break;
            case 'f':
                await findProduct();
                break;
            case 'x':
                saveAndExit();
                return;
            default:
                //console.log('Ungültige Eingabe. Bitte wählen Sie a, f, d oder x.');
                console.clear();
                continue;
        }


    }
    while (true);
});

function handleJsonFile(err, data) {
    if (err) {
        console.error("Error reading file\n");
        writeFile('data.json', dataString, 'utf8', (err) => {
            if (err) {
                console.error('Error writing file: ', err.message)
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


}

async function deleteProduct() {
    let productNumberDelete = await prompt("Produktnummer die du löschen möchtest: ");
    let deleteIndex = productsArray.find(product => product.id === productNumberDelete);
    if (deleteIndex !== -1) {
        let deleteProduct = productsArray[deleteIndex];
        console.log('Gefundenes Produkt:', deleteIndex);

        let deleteChoice = await prompt('Willst du wirklich löschen? "Ja" oder "Nein": ');

        switch (deleteChoice.toLowerCase()) {
            case 'ja':
                productsArray.splice(deleteIndex, 1);
                console.log('Produkt erfolgreich gelöscht.');
                return;
            case 'nein':
                console.log('Löschvorgang abgebrochen.');
                return;
            default:
                console.log('Ungültige Eingabe. Löschvorgang abgebrochen.');
                return;
        }
    }
}

async function findProduct() {
    let productNumberFind = await prompt("Produktnummer: ");
    let foundProduct = productsArray.find(product => product.id === productNumberFind);
    //productsArray.find(productNumberFind);
    console.clear()
    if (foundProduct) {
        console.log('Gefundenes Produkt:', foundProduct);
    } else {
        console.log(`Produkt mit der Nummer ${productNumberFind} nicht gefunden.`);
    }
}

function saveAndExit() {
    
    const dataToWrite = JSON.stringify(productsArray);

    writeFile(fileName, dataToWrite, 'utf8', (err) => {
        if (err) {
            console.error('Fehler beim Speichern der Datei');
        } else {
            console.log('Daten erfolgreich gespeichert');
        }
        process.exit(0);
    });
}