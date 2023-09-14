let stars = "*";
let result = "";
let maxStars=prompt("How high do you want your pyramid to be?");
for (let i=1;i<=maxStars;i++){
    result += stars;
    document.write(result +" <br>");
}

/*
for (let i=1; i<=maxStars; i++){
    for (let j=1; j<= i; j++){
        document.write("*");
    }                               another way to solve the first part of the exercise
    document.write("<br>");
}*/
