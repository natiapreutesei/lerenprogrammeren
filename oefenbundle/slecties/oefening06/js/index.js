let addition = "";
let stars = "*";
let amountStars=prompt("How many stars do you want to print on screen?");
for (let i=1;i<=amountStars;i++){
    let result = addition + stars;
    addition = result;
    document.write(result +" <br>");
}
