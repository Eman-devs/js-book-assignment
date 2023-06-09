// 1. Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”

var city = prompt("Enter your city")

if(city=='karachi'){
alert("Welcome to city of lights")
}
else{
    alert("Try again please")
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter your gender please")
if(gender=='female'){
    alert("Good morning Ma'am")

}

if(gender=='male'){
    alert("Good morning sir")
}

// 3. Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:


var userinput = prompt("Enter your color")

if(userinput=='red'){
alert(" you Must have stop")
}
if(userinput=='yellow'){
    alert("Ready to move")
}
if(userinput=='green'){
    alert("Move now")
}

// 4. Write a program to take input remaining fuel in car (in 
    // litres) from user. If the current fuel is less than 0.25litres, 
    // show the message “Please refill the fuel in your car”



var fuel = prompt("Enter your car fuel in liter")
if(fuel <=  0.25){
    alert("Please refill the fuel in your car")
}
else{
    alert("your car tank is filled")
}

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the output

var a = 4;
var a = +prompt("Enter the number please")
if( a ++=== 5){
    alert("Given condition for variable is true")
}
var b = 82;
var b = +prompt("Enter the number please")
if (b ++=== 83){
    alert("given condition for variable is true")

}

var c = 12;
var c =+prompt("ENter tha number please")
if( c ++===13){
alert("condition 1 is true")
}
if(c ===13){
    alert('condition 2 is true')
}
if(++c<14){
alert('condition 3 is true')
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals"+totalCost );
}

// 8.Marksheet:

var math = 100;
var urdu = 100;
var eng = 100;
var totalMask = math+urdu+eng;
var userName = prompt("Enter your name please");
var parseInt = +prompt("Total mask is 300 please enter your obtained mask");
var obtained = parseInt;
var per = obtained * 100 / 300;
console.log(per)
if(per >=80){
    document.write('<b>Grade is A-ONE<br>Remarks : Excellent<br>percentage:'+per)
}
 else if(per>=70){
document.write('<b>Grade is "A"<br>Remarks : Good<br>percentage:'+per)
}
else  if(per>=60){
    document.write('<b>Grade is "B"<br>Remarks :You need to improve<br>percentage:'+per)
}
 else if (per>=50){
    document.write('<b>Grade is "C"<br>Remarks : Fail<br>percentage:'+per)
}


// 7. Guess game:


var SecertNumber = +prompt("Guess the Numder between 1 to 10");
if(SecertNumber == 5){
    alert("Congratulation your guess the right number")
}
else if(SecertNumber <=5){
    alert("your guess is too closed")
}
else {
    alert(" guess again")
}

// 10.Temperature cheaker

var parseInput = +prompt("Enter today's Temperature")
if(parseInput>40){
alert('It is too hot outside')
}
else if(parseInput>30){
    alert('The Weather today is Normal')
}
else if(parseInput>20){
    alert('Today’s Weather is cool')
}
else if(parseInput>10){
    alert('OMG! Today’s weather is so Cool')
}






