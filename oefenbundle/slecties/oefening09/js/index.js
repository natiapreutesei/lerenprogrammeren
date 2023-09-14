let number = Number(prompt("Show all the numbers till number:"));
for (let i=1;i<=number;i++){
    if (i<10){
        i = "0"+i;
    }
    document.write(i + "<br>");
}