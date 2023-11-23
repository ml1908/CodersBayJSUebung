const film = [
    {
        name: "American Sniper",
        genre: "Action",
    },
    {
        name: "Ted",
        genre: "Comedy",
    },
];

for (let value of film) {
    console.log(value)
}
for (let value of film) {
    console.log(value.name)
}


for (const property in film){
    console.log(`${property}: ${object[property]}`);
}