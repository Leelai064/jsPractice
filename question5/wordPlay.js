//5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front. 

//setInterval...Array....substring *Hint hint*
//substr(): x is the number that the new string will begin with, y is the number of char subtracted from the string. All other extra chars are deleted.
// trim(): removes whitespace from both sides of a string.
// pop(): removed the last element from an array and returns that element. This method changes the length of the array.
// push(): method adds one or more elements to the end of an array and returns the new length of the array.
// shift(): method removes the first element from an array and returns that removed element. This method changes the lenght of the array.
// join(): method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified seperator string. If the array has only one item. then that item will bereturned without using the seperator.
// unshift(): method adds one or more elemts to the beginning of an array and returns the new length of the array.

// var rotateTimer = setInterval(letterArray , 1000);
// var letterArray = ['w','3','r','e','s','o','u','r','c','e'];
let word = 'w3resource'
// var newString;
function wordPlay (){
 setInterval(function(){
    word = word[word.length - 1] + word.substring(0, word.length - 1)
    console.log(word);
 }, 500)

}

wordPlay()
//throw new Err_Invalid_Callback

//conditionals!!
//React focus on javascript