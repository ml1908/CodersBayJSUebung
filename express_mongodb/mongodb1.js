const { MongoClient } = require("mongodb");
const readline = require('readline');
const dotenv = require('dotenv');


const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

const dbName = 'Cluster0';

dotenv.config();
const url = process.env.MONGO_CONNECTION_STRING;

async function main() {
    try {
        const client = new MongoClient(url);
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db(dbName);
        const collection = db.collection('users');


        const firstName = await prompt('Bitte gib deinen Vornamen ein: ');
        const lastName = await prompt('Bitte gib deinen Nachnamen ein: ');


        const user = {
            firstName: firstName,
            lastName: lastName
        };


        await collection.insertOne(user);
        console.log('Nutzer erfolgreich in die Datenbank eingefügt.');


        const users = await collection.find().toArray();
        console.log('\nAlle Nutzer in der Datenbank:');
        users.forEach(u => console.log(u));
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        console.error('MongoDB Connection String:', url);
    } finally {
        console.log("Auf Wiedersehen")
        process.exit();
    }
}

main();


