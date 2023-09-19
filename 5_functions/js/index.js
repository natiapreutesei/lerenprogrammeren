let zin = "full Stack DevelOpers";
let intro = "Welkom";
document.write(`Hoofdletters: ${zin.toUpperCase() } <br>`)
document.write(`Kleine letters: ${zin.toLowerCase() } <br>`)
document.write(`${intro} ${zin} <br>`)
document.write(`Samenvoegen ${intro.concat(' ',zin).toUpperCase()}  <br>`);
document.write(`charAt: ${zin.charAt(6)}  <br>`);
document.write(`charCodeAt: ${zin.charCodeAt(6)}  <br>`);

let mySplit = zin.split();
document.write(`split: ${mySplit}  <br>`);
document.write(`Array: ${mySplit[0]} <br>`);
document.write(`Sunstring: ${zin.substring(2,9)} <br>`);
document.write(`Positie uit een string: ${zin.indexOf(`z`)}  <br>`);
document.write(`laast positie: ${zin.lastIndexOf(`a`)}  <br>`);
document.write(`laast positie: ${zin.lastIndexOf(`a`)}  <br>`);
document.write(`vervangen : ${zin.replace(`e`,`o`)}  <br>`);
let getal=5;
document.write(`getal naar string: ${getal.toString()} <br>`)

let num1 = parseFloat("10.66abc"); // 10.66
document.write(num1);
let num2= Number("10.66abc"); //NaN
document.write(num2);
let num3 = parseInt("10.66abc"); // 10
document.write(num3);