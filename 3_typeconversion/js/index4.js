let startingNumber = 0;
document.getElementById("plusOne").onclick = function (){
    startingNumber= startingNumber+ Number(document.getElementById("toAdd").value);
    document.getElementById("result").innerHTML  = startingNumber;
}

//The number increments everytime you press the button
/* let startingNumber = 0;
 document.getElementById("plusOne").onclick = function (){
     startingNumber= startingNumber+1;
     document.getElementById("result").innerHTML  = startingNumber;
 }*/


