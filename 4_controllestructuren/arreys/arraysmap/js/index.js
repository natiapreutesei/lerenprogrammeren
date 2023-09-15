// map heeft een CALLBACK functie (can call himself back)
let numbers = [1,2,3,4,5];

let multiply = numbers.map((x) => x * 2);
document.write(multiply);