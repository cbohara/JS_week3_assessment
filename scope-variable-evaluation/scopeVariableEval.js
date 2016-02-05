/*

This week we focused a lot on Scopes and variable access. 

Without running the code, type out the value of each console.log statement based on what you know about the rules of scope.

Feel free to look back at the slides if necessary.

*/


var sayHey = function(){
	var greeting = 'hey';

	var sayGreeting = function(){
		var greeting = "what up?"
		console.log(greeting);
		
		//1. On the line below type what sayGreeting will console.log on line 15
	};


	var sayGreetingTwo = function(){
		var greetingTwo = "what up?";

		var sayGreetingThree = function(){
			console.log(greeting);

			//2. on the line below type what sayGreetingTwo will console.log on line 25
		};
	};
	
	console.log(greetingTwo);

	//3. on the line below, type out what sayGreetingThree will console.log on line 31

};
