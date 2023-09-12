let age = prompt("Enter your age:");
if (age >= 18) {
    document.write("You are " + age + " years old. You may participate in the National Lottery! ")
    let choiceToBuy = confirm("Do you want to play a full bulletin of 12 squares?");
    if (choiceToBuy) {
        document.write("The price of a full bulletin is 20 euro.")
    } else {
        let numberSquares = prompt("How many squares do you want to bu? (2,4,6,8,10)");
        switch (parseInt(numberSquares)) {
            case 2:
                document.write("The price for 2 squares is 4 euro.");
                break;
            case 4:
                document.write("The price for 4 squares is 8 euro.");
                break;
            case 6:
                document.write("The price for 6 squares is 12 euro.");
                break;
            case 8:
                document.write("The price for 8 squares is 16 euro.");
                break;
            case 10:
                document.write("The price for 10 squares is 18 euro.");
                break;
            default:
                document.write("You didn't choose a correct number of squares. Chose again!");
        }
    }
} else {
    document.write("You must be 18 year old to be eligible to enter the National Lottery!")
}
