// for loop

// for (teller;conditie;manipulatie van de teller){
//     uitvoring van code
// }
// 3de parameter
    // optelling i=i+1 ; i+=1; i++
/*for (let i=1;i<=10;i++){
    document.write(i);
}*/
let som =0;
for (let i=1;i<=3;i++){
    let getal = Number(prompt("Geef getal "+ i + " in:"));
    som = som + getal;

}
document.write(som);