//1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
//Sample Output : Today is : Tuesday.
//Current time is : 10 PM : 30 : 38

var today = new Date();
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var dayOfTheWeek = today.getDay();
var hour = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
var anteMeridiem = 'AM';
var postMeridiem = 'PM';
var currentHour;


if (hour <= 12) {
    
    currentHour = hour + ' ' + anteMeridiem
} else {
    hour = hour - 12
    currentHour = hour + ' ' + postMeridiem
}


// Need an if else statement here.
//Can't figure out how to differenciate between ante and post Meridiem (AM/PM).
console.log(dayOfTheWeek);
console.log('Today is : ' + days[dayOfTheWeek-1]);
console.log('Current Time : ' + currentHour + ' : ' + minutes + ' : ' + seconds);