let firstArray = [];
let secondArray = [];
// the for that pushes all the numbers from 0 to 10 in
for (let i=1;i<11;i++){
    firstArray.push(i);
    secondArray.push(i);
}

let sumArray  = [];
for(let j = 0; j < firstArray.length; j++){
    sumArray.push(firstArray[j] + secondArray[j]);
}
//prints the result on screen
for (let k=0;k<firstArray.length;k++) {
    //document.write(firstArray[k] +" + "+ secondArray[k] + " = " + sumArray[k] + "<br>");
     document.write(`${firstArray[k]} + ${secondArray[k]} = ${sumArray[k]} <br>`);
}
