let number = Number(prompt("Give a number:"));

for (let i=1;i<=number;i++){
    if (i % 2 === 0){
        //document.write("Even numbers:" + i + "<br>");
        document.write(`Even numbers: ${i} <br>`)
    }
}