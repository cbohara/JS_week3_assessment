/* 

mutateString is a higher order function that takes a function and a string and returns the results of the callback function that augments the string.

Check out the examples below:

function capsLock(val){
	return string.toUpperCase();
};

function splitIntoArray(val){
	return string.split();
}

mutateString(capsLock, 'I want a burrito');
// I WANT A BURRITO

mutateString(spilitIntoArray, 'abcde');
// ['a', 'b', 'c', 'd', 'e'];


Below, invoke mutateString with one ANONYMOUS FUNCTIONS passed in as a callback. The anonymous function will make all letters in a string lowercase.

I've created a testCase for you on line 34.


*/

function capsLock(val){
	return string.toUpperCase();
};


var mutateString = function(func, string){
	return func(string);
};


var PROGRAMMINGISFUN = mutateString(capsLock, 'programming is fun');

// your code here: