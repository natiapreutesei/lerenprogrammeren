/*Write a program that asks the user to enter numbers
until he enters a negative number. Read the numbers into an array.

Enter NUMBER x:

Then you ask the user how many numbers he wants to see on the screen.*/
/*let numberArray = [];
for (let i =1; numbers>0 ; i++){
    let numbers = parseInt(prompt("Write number " + i + " in:"));
    if( numbers >0){
        numberArray.push(numbers);
    } else {
        document.write("You have entered a negative number! <br>");
        break;
    }*/
let counter0=1;
let numberArray = [];
let numbers = parseInt(prompt("Write number " + counter0 + " in:"));
    while(numbers>0){
        numberArray.push(numbers);
    }

let displayNumbers = parseInt(prompt("How many numbers do you want to see on screen?"));
let counter = 0;
while(counter<=displayNumbers){
    document.write(numberArray.slice(counter));
    counter++;
}
