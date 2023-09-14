const getal = parseInt(prompt("Geef een getal:"));
let faculteit =1;
let faculteitString = getal + "!";
for(let i=getal;i>=1;i--){
    faculteit *= i;
    if (i !== getal){
        faculteitString += "x"+i;
    }
} document.write(faculteitString + " = " + faculteit);