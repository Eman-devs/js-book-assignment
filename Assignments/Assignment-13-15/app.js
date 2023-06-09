
// Declare an empty array using JS object notation to store
// student names in future.

var studentname = ["dua","aryan","saim","maryam"];
console.log(studentname);

var cookies = ["chocolate cookies","vanilla cookies","berry cookies"];
console.log(cookies.toString());

var num = [1,2,3,4,5,6,7,8,9,10];
console.log(num);

var qualification = ["SSC","HSC","BSC","BS","B-COM","MS","M-phil","PHD"];
var qLen = qualification.length;
var text = "<ul>";
for (var i = 0; i < qLen; i++) {
  text += "<li>" + qualification[i] + "</li>";
}
text += "</ul>";
document.getElementById("demo").innerHTML = text;

