//------asyn - await-------

import { readFile, writeFile } from 'node:fs/promises';
import readline from 'readline';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

const fileName = 'data23452.json';

let dataString = '[]';
let productsArray;

async function handleJsonFile() {
    try {
        const data = await readFile(fileName, 'utf8');
        productsArray = JSON.parse(data);
    } catch (err) {
        console.error("Error reading file", err.message);

        try {
            await writeFile(fileName, dataString, 'utf8');
            console.log('File is ready');
            productsArray = JSON.parse(dataString);
        } catch (writeErr) {
            console.error('Error writing file: ', writeErr.message);
        }
    }

    await execute();
}

async function addProduct() {
    let id = await prompt('Produktnummer: ');
    let name = await prompt('Bezeichnung: ');
    let price = await prompt('Preis: ');

    let product = {
        id: id,
        name: name,
        price: price
    };

    console.log(product);
    productsArray.push(product);
}

async function deleteProduct() {
    let productNumberDelete = await prompt("Produktnummer die du löschen möchtest: ");
    let deleteIndex = productsArray.findIndex(product => product.id === productNumberDelete);

    if (deleteIndex !== -1) {
        let deleteProduct = productsArray[deleteIndex];
        console.log('Gefundenes Produkt:', deleteProduct);

        let deleteChoice = await prompt('Willst du wirklich löschen? "Ja" oder "Nein": ');

        switch (deleteChoice.toLowerCase()) {
            case 'ja':
                productsArray.splice(deleteIndex, 1);
                console.log('Produkt erfolgreich gelöscht.');
                break;
            case 'nein':
                console.log('Löschvorgang abgebrochen.');
                break;
            default:
                console.log('Ungültige Eingabe. Löschvorgang abgebrochen.');
        }
    }
}

async function findProduct() {
    let productNumberFind = await prompt("Produktnummer: ");
    let foundProduct = productsArray.find(product => product.id === productNumberFind);

    console.clear();
    if (foundProduct) {
        console.log('Gefundenes Produkt:', foundProduct);
    } else {
        console.log(`Produkt mit der Nummer ${productNumberFind} nicht gefunden.`);
    }
}

async function saveAndExit() {
    const dataToWrite = JSON.stringify(productsArray);
    await showLoadingBar();

    try {
        await writeFile(fileName, dataToWrite, 'utf8');
        console.log('Daten erfolgreich gespeichert');
    } catch (err) {
        console.error('Fehler beim Speichern der Datei', err.message);
    } finally {
        console.log("Bis zum nächsten mal.");
        process.exit(0);
    }
}

async function execute() {
    do {
        let choice = await prompt("Was möchten Sie tun? (a) Produkt Hinzufügen, (f) Produkt Finden, (d) Produkt löschen (x) Speichern und Beenden: ");
        switch (choice.toLowerCase()) {
            case 'a':
                await addProduct();
                break;
            case 'd':
                await deleteProduct();
                break;
            case 'f':
                await findProduct();
                break;
            case 'x':
                await saveAndExit();
                return;
            default:
                console.clear();
                continue;
        }
    } while (true);
}

function pause(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function showLoadingBar() {
    const progressBarLength = 10;
    let progressBar = '[          ]';

    console.clear();
    console.log(progressBar);

    for (let i = 1; i <= progressBarLength; i++) {
        await pause(1000); // Warte 1 Sekunde

        progressBar = `[${'#'.repeat(i)}${' '.repeat(progressBarLength - i)}]`;
        console.clear();
        console.log(progressBar);
    }

    console.log('Ladevorgang abgeschlossen!');
}

handleJsonFile();
