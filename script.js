let arr = [];
let arrLength;
let minEl;
let maxEl;
do {
    arrLength = +prompt(`Введіть довжину масиву: від 2 до 10`);
    arrLength = Math.abs(arrLength);
    arrLength = Math.round(arrLength)

} while (!arrLength || isNaN(arrLength) || arrLength < 2 || arrLength > 10)

do {
    minEl = prompt(`Введіть мінімальне значення рандомного елементу масиву: від -10 до 10`)
    minEl = Math.round(minEl)
} while (!minEl || isNaN(minEl) || minEl < -10 || minEl > 10)

do {
    maxEl = prompt(`Введіть максимальне значення рандомного елементу масиву: від ${minEl + 1} до 50 включно`)
    maxEl = Math.round(maxEl)
} while (!maxEl || isNaN(maxEl) || maxEl <= minEl || maxEl > 50)

for (let i = 1; i <= arrLength; i++) {
    arr[arr.length] = getRandomIntInclusive(minEl, maxEl)
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

let arrMinEl = arr[0];
let arrMaxEl = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arrMinEl) {
        arrMinEl = arr[i];
    }
    if (arr[i] > arrMaxEl) {
        arrMaxEl = arr[i];
    }
}
console.log(arr);
console.log(`Мінімальне значення елемента масиву: ${arrMinEl}`);
console.log(`Максимальне значення елемента масиву: ${arrMaxEl}`);

let indexOfMin = arr.indexOf(arrMinEl);
let indexOfMax = arr.indexOf(arrMaxEl);

arr[indexOfMin] = arrMaxEl;
arr[indexOfMax] = arrMinEl;
console.log(arr);