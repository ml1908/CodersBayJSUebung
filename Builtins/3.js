const arr1 = [
    3, 1, 25, 11, 9, 14, 12, 2, 22, 36, 15, 8, 5
]


function numSort(a, b) {
    return (a - b);
}
arr1.sort(numSort);
console.log(arr1);






const values = [1, 10, 21, 2];
values.toSorted = (param) => {
    return undefined;
};
const sortedValues = values.toSorted((a, b) => a - b);
console.log(sortedValues); // [1, 2, 10, 21]
console.log(values); // [1, 10, 21, 2]