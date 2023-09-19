let firstArray = [];
let secondArray = [];
// let number = parseInt(prompt("Write a number between 0 and 10:"));
for (let i=0;i<11;i++){
    firstArray.push(i);
    secondArray.push(i);
}
// document.write(firstArray + "<br>" +  secondArray);
let sumArray  = [];
for(let j = 0; j < firstArray.length; j++){
    sumArray.push(firstArray[j] + secondArray[j]);
}

for (let k=0;k<firstArray.length;k++) {
    //document.write(`${firstArray[k]}  <br> secondArray: ${secondArray} <br>`);

} document.write("Sum of the Arrays:" + sumArray);
/*
document.write(`${firstArray}  <br> secondArray: ${secondArray} <br>`);
document.write("Sum of the Arrays:" + sumArray);*/
