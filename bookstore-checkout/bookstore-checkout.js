/*
We accidentally left out one of the most important features of our Bookstore: the ability to buy books.
Create a function called checkOut that takes a balance and user as parameters and, if the balance is larger than the price of the books in the cart, prompts the user about whether they'd like to check out.
If the user does want to check out, subtract the total price of the book from the users balance and return their new balance. 
I've created a user and cart below to help you test your function:
*/

var bruno = {
	'name': 'Bruno Mars',
	'balance': 29
};

var brunoCart = [{'title': 'Lord of the Rings', 'price': 12}, 
			{'title': 'Harry Potter', 'price': 15}];


// determine total price of books in the users cart
function addPrices(arr){
	// initialize variable to total up book prices in the cart
	var total = 0;
	// search through the array of books
	for(var i = 0; i < arr.length; i++){
		total += arr[i].price;	
	}
	return total;
};

function checkout(cart, user){
	// determine total price of books in the users cart
	var totalInCart = addPrices(cart);
	// if the user balance is greater than the total in cart, ask the user if they would like to check out
	if(totalInCart < user.balance)
		// if the user does want to check out, subtract the total price of the book from the users balance and return their new balance
		if(confirm('Would you like to check out?')){
			return user.balance - totalInCart;
		}
};

checkout(brunoCart, bruno);