// function findMax(...zahlen) {
//     if (zahlen.length === 0) {
//         // Wenn keine Zahl übergeben wurde, gibt die Funktion undefined zurück.
//         return undefined;
//     }
//
//     let max = zahlen[0];
//
//     for (let i = 1; i < zahlen.length; i++) {
//         if (zahlen[i] > max) {
//             max = zahlen[i];
//         }
//     }
//
//     return max;
// }
//
// // Beispielaufrufe:
// console.log(findMax(5, 2, 8, 1)); // 8
// console.log(findMax(10, 25, 18));   // 25
// console.log(findMax(-1, 0, 1, 2));  // 2

function high(a, b, c, d){
    if(a > b && a > c && a > d){
        return a;
    } else if(b > a && b > c && b > d){
        return b;
    } else if (c > a && c > b && c > d){
        return c;
    } else {
        return d;
    }
}

console.log(high(5,15, 7, 3))

function biggestNumber(a, b, c, d){
    return Math.max(a, b, c, d)
}
console.log(biggestNumber)


