//--------- .then ----------
import { readFile, writeFile } from 'node:fs/promises';
import readline from 'readline';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

const fileName = 'data23452.json';

let dataString = '[]';
let productsArray;

readFile(fileName, 'utf8')
    .then((data) => handleJsonFile(null, data))
    .catch((err) => {
        console.error("Error reading file", err.message);

        writeFile(fileName, dataString, 'utf8')
            .then(() => {
                console.log('File is ready');
                productsArray = JSON.parse(dataString);
                execute();
            })
            .catch((writeErr) => console.error('Error writing file: ', writeErr.message));
    });

function handleJsonFile(err, data) {
    if (err) {
        console.error("Error reading file", err.message);
        writeFile(fileName, dataString, 'utf8')
            .then(() => {
                console.log('File is ready');
                productsArray = JSON.parse(dataString);
                execute();
            })
            .catch((writeErr) => console.error('Error writing file: ', writeErr.message));
    } else {
        productsArray = JSON.parse(data);
        execute();
    }
}

function addProduct(productsArray) {
    let id = prompt('Produktnummer: ');
    let name = prompt('Bezeichnung: ');
    let price = prompt('Preis: ');

    let product = {
        id: id,
        name: name,
        price: price
    };

    console.log(product);
    productsArray.push(product);
}

function deleteProduct() {
    let productNumberDelete = prompt("Produktnummer die du löschen möchtest: ");
    let deleteIndex = productsArray.findIndex(product => product.id === productNumberDelete);

    if (deleteIndex !== -1) {
        let deleteProduct = productsArray[deleteIndex];
        console.log('Gefundenes Produkt:', deleteProduct);

        let deleteChoice = prompt('Willst du wirklich löschen? "Ja" oder "Nein": ');

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

function findProduct() {
    let productNumberFind = prompt("Produktnummer: ");
    let foundProduct = productsArray.find(product => product.id === productNumberFind);

    console.clear();
    if (foundProduct) {
        console.log('Gefundenes Produkt:', foundProduct);
    } else {
        console.log(`Produkt mit der Nummer ${productNumberFind} nicht gefunden.`);
    }
}

function saveAndExit() {
    const dataToWrite = JSON.stringify(productsArray);

    showLoadingBar()
        .then(() => {
            return writeFile(fileName, dataToWrite, 'utf8');
        })
        .then(() => {
            console.log('Daten erfolgreich gespeichert');
            process.exit(0);
        })
        .catch((err) => {
            console.error('Fehler beim Speichern der Datei', err.message);
            process.exit(1);
        });
}

function execute() {
    do {
        prompt("Was möchten Sie tun? (a) Produkt Hinzufügen, (f) Produkt Finden, (d) Produkt löschen (x) Speichern und Beenden: ")
            .then((choice) => {
                switch (choice.toLowerCase()) {
                    case 'a':
                        addProduct(productsArray);
                        break;
                    case 'd':
                        deleteProduct();
                        break;
                    case 'f':
                        findProduct();
                        break;
                    case 'x':
                        saveAndExit();
                        break;
                    default:
                        console.clear();
                        break;
                }
            });
    } while (true);
}

function pause(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function showLoadingBar() {
    const progressBarLength = 10;
    let progressBar = '[          ]';

    console.clear();
    console.log(progressBar);

    let promises = [];
    for (let i = 1; i <= progressBarLength; i++) {
        promises.push(
            pause(1000)
                .then(() => {
                    progressBar = `[${'#'.repeat(i)}${' '.repeat(progressBarLength - i)}]`;
                    console.clear();
                    console.log(progressBar);
                })
        );
    }

    return Promise.all(promises)
        .then(() => console.log('Ladevorgang abgeschlossen!'));
}
