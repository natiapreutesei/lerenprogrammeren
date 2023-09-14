let addition = 0;
let amountReps=Number(prompt("How many numbers do you want to add?"));
for (let i=1;i<=amountReps;i++){
    let number = Number(prompt("Write the "+ i + " number:"));
    addition = addition + number;
}
document.write("The total of the addition of "+amountReps+" numbers is " +addition);