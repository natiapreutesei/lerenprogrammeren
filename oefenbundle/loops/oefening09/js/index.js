// check if those numbers are prime numbers

let finalNumber = parseInt(prompt("Give a final number:")); //ask for final number

for (let i = 2; i <= finalNumber; i++) {
    let primeBoolean = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            primeBoolean = false;
            break;
        }
    }
    if (primeBoolean) {
        document.write(i + " ");
    }
}
