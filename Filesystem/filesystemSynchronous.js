
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

const findProduct = async () => {
    const searchId = await prompt('Geben Sie die Produktnummer ein: ');
    const foundProduct = products.find(product => product.id === searchId);

    if (foundProduct) {
        console.log('Gefundenes Produkt:', foundProduct);
    } else {
        console.log(`Produkt mit der Nummer ${searchId} nicht gefunden.`);
    }

    menu();
};

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


menu();






