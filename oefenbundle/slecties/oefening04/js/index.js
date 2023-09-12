// Total cannot be a negative number
//Let the user know

let yearOfBirth = prompt("Enter your year of birth:");
let currentYear = prompt("Enter current year:");
if (currentYear - yearOfBirth >= 18) {
    document.write("From now on, I may, can will decide everything, within the legal limits.");
} else if (currentYear - yearOfBirth < 0) {
    document.write("The difference between your year of birth and the current year cannot be negative!")
} else {
    document.write("Luckily I have my parents who take care of everything for me.");
}