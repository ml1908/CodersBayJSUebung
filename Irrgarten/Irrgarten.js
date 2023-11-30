const field = [
    ['# ', '# ', '# ', '# ', '# ', '# ', '# ', '# ', '# '],
    ['# ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '# '],
    ['# ', '  ', "# ", '# ', '  ', '  ', '# ', '  ', '# '],
    ['# ', '  ', '  ', '# ', '  ', '  ', '# ', '# ', '# '],
    ['# ', '# ', '  ', '# ', '# ', '  ', '  ', '  ', '# '],
    ['# ', '  ', '  ', '  ', '  ', '# ', '# ', '  ', '# '],
    ['# ', '  ', '# ', '# ', '  ', '  ', '  ', '  ', '# '],
    ['# ', '  ', '  ', '  ', '# ', '# ', '# ', '  ', '# '],
    ['# ', '  ', '# ', '  ', '  ', '  ', '  ', '  ', '# '],
    ['# ', '# ', '# ', '# ', '# ', '# ', '# ', '# ', '# '],
];

function printField(field) {

    for (let zeile = 0; zeile < field.length; zeile++) {
        let zeilenString = '';
        for (let spalte = 0; spalte < field[zeile].length; spalte++) {
            zeilenString = field[zeile][spalte] + zeilenString;
        }
        console.log(zeilenString);
    }
}


let playerPosition = {
    x: 1,
    y: 3
}

let goalPosition = {
    x: 2,
    y: 7
}

function placePlayer(field, position) {
    field[position.x][position.y] = 'X ';
}

function placeGoal(field, position) {
    field[position.x][position.y] = 'O ';
}

placePlayer(field, playerPosition);
placeGoal(field, goalPosition);
printField(field);


const readline = require('readline');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));


async function execute() {
    do {
        let potentialPosition;
        let way = await prompt("Wähle deine Richtung (W,S,A,D): ");

        switch (way.toUpperCase()) {
            case 'W':
                potentialPosition = {x: playerPosition.x - 1, y: playerPosition.y};
                break;
            case 'S':
                potentialPosition = {x: playerPosition.x + 1, y: playerPosition.y};
                break;
            case 'D':
                potentialPosition = {x: playerPosition.x, y: playerPosition.y - 1};
                break;
            case 'A':
                potentialPosition = {x: playerPosition.x, y: playerPosition.y + 1};
                break;
            case'X':
                console.log("Du hast das Spiel beendet")
                return;
            default:
                execute();
                return;
        }
        console.clear();

        placeGoal(field, goalPosition);

        
        field[playerPosition.x][playerPosition.y] = '  ';
        

        if (field[potentialPosition.x][potentialPosition.y] === '# ') {
            console.log("Du kannst hier nicht durch Mauern fahren")
            execute();
        } else {
            field[potentialPosition.x][potentialPosition.y] = 'X ';
            playerPosition.x = potentialPosition.x;
            playerPosition.y = potentialPosition.y;
            
        }
        placePlayer(field, playerPosition);
        placeGoal(field, goalPosition);
        printField(field);

        if (playerPosition.x === goalPosition.x && playerPosition.y === goalPosition.y) {
            console.clear()
            placePlayer(field, playerPosition);
            printField(field);
            console.log('Glückwunsch, du hast das Ziel erreicht!');
            break;
        }

    }
    while (true)


}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());