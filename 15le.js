const input = require("readline-sync");
let a = input.questionInt("ENTER A NUMBER :- " );
if (a%4==0 && a%100!==0) {
console.log("LEAP YEAR");
} 
else if (a%400==0){ 
    console.log("leap year"); 
} 
else {
    console.log("not");
}