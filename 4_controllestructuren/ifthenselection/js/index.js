let number1 = prompt("Give a first number in:");
let number2 = prompt("Give a second number in:");

/*if(conditie){
    true
}else{
    false
}*/
//normal notation
if(number1>=number2){
    console.log(number1 + " is greater then or the same as " + number2);
}else{
    console.log(number1 + " is smaller then " + number2);
}

//shorthand notation
number1>=number2?
    console.log(number1 + " is greater then or the same as " + number2): //else in this notation is :
    console.log(number1 + " is smaller then " + number2);