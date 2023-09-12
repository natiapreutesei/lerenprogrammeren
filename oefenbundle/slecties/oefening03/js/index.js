let yearOfBirth = prompt("Enter your year of birth:");
let currentYear = prompt("Enter current year:");

if (currentYear - yearOfBirth >= 18) {
    document.write("From now on, I may, can will decide everything, within the legal limits.");
} else {
    document.write("Luckily I have my parents who take care of everything for me.");
}