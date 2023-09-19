const chosenNumber = parseInt(prompt("Give a number:"));
let result = 0;
let count = 1;

    for (let i = 1 ; i <= chosenNumber ; i *=2){
            result = result+count;
            count = result;
            document.write(result + ", ");
    }