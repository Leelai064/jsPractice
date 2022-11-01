//3. Write a JavaScript program to get the current date.

//Long Date format: Nov 25 2022
//ISO Date format: 2022-11-25
//Short Date format: 11/25/2022

var currentDate = new Date();
var date = currentDate.getDate()
console.log(date);

var month = currentDate.getMonth();
console.log(month + 1);

var year = currentDate.getFullYear();
console.log(year)

console.log (month + "/" +  date + "/" + year);