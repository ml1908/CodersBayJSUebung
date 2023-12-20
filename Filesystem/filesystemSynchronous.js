//const fs = require('fs');
//const readline = require('readline-sync');
import {readFileSync, writeFileSync} from 'node:fs';
import readline from 'readline';

const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

let products = [];
const fileName = 'data339.json';

try {
    const data = readFileSync(fileName, 'utf8');
    products = JSON.parse(data);
} catch (err) {
    console.error('Fehler beim Lesen der Daten:', err.message);
}


const addProduct = async () => {
    const id = await prompt('Produktnummer: ');
    const name = await prompt('Bezeichnung: ');
    const price = await prompt('Preis: ');

    const product = {
        id: id,
        name: name,
        price: price
    };

    products.push(product);
    console.log('Produkt hinzugefügt:', product);
    menu();
};

// Funktion zum Suchen von Produkten
const findProduct = async () => {
    const searchId = await prompt('Geben Sie die Produktnummer ein: ');
    const foundProduct = products.find(product => product.id === searchId);

    if (foundProduct) {
        console.log('Gefundenes Produkt:', foundProduct);
    } else {
        console.log('Produkt nicht gefunden.');
    }

    menu();
};

// Funktion zum Speichern und Beenden
const saveAndExit = () => {
    const jsonData = JSON.stringify(products, null, 2);
    try {
        writeFileSync(fileName, jsonData, 'utf8');
        console.log('Daten erfolgreich gespeichert.');
        rl.close()
    } catch (err) {
        console.error('Fehler beim Speichern der Daten:', err.message);
    }
};

// Hauptmenü
//readFile(fileName, 'utf8', async (err, data) => {
    
const menu = async () => {
    const choice = await prompt('Was möchten Sie tun? (a) Hinzufügen, (f) Finden, (x) Speichern und Beenden: ');

    switch (choice.toLowerCase()) {
        case 'a':
            await addProduct();
            break;
        case 'f':
            await findProduct();
            break;
        case 'x':
            saveAndExit();
            break;
        default:
            console.log('Ungültige Eingabe. Bitte wählen Sie a, f oder x.');
            menu();
    }
};

// Start des Programms
menu();



/*
import { readFileSync, writeFileSync } from 'node:fs';

try {
    const data = readFileSync('./package.json', 'utf-8');
    
    const dataObj = JSON.parse(data);
    
    
    delete dataObj.private;

    const dataToWrite = JSON.stringify(dataObj, null, 2);

    writeFileSync('./package.json', dataToWrite, 'utf-8');

    console.log('File saved succesfully!')
} catch (err){
    console.error('Error processing file')
}
*/



