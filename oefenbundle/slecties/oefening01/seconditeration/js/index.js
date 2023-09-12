document.getElementById("send").onclick = function () {
    let age = document.getElementById("age").value;
    if (age >= 18) {
        document.write("You are " + age + " years old. You may participate in the National Lottery!")
    } else {
        document.write("You must be 18 year old to be eligible to enter the National Lottery!")
    }
}
