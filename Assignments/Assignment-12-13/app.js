// 5.password login

var usrname = 'eman';
var password = '1234#';
var userInput = prompt("Enter the username")
var pass = prompt("Enter your password here")

if(usrname=='eman' && pass =='1234#'){
    alert("Correct! The password you entered matches the original password")
}
else{
    alert("Incorrect password")
}

// 2.integer display larger

var num1, num2;
num1 = +prompt("Input the First integer", "0");
num2 = +prompt("Input the second integer", "0");
                                                 
if(parseInt(num1, 10) > parseInt(num2, 10)) 
  { 
  alert("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
  }   
else
  if(parseInt(num2, 10) > parseInt(num1, 10)) 
  {
  alert("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
  }                  
else
  {
   alert("The values "+ num1+ " and "+num2+ " are equal.");
  }


// 3.Number are positive and negative

var int = +prompt("Enter the number")
if(int<10){
	alert('This number is positive'+ " " +int)
}
if(int<-1){
	alert('This number is negative'+ " " +int)
}



