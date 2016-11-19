const prompt = 0;
const input = 1;
const output = 2;
function main(){
	var ioStream = [ //start 2d array
		
		[  //array[0] elements the prompts
			"Hello, Welcome to the Library! Could I help you find a book?",
			"Welcome to the Library! Are you looking for a book or shall I recommend one for you?",
			"Hello Welcome! What can I do for you today?"
		],
		[ //array[1] elements input key words
			"Looking", "looking", "look", "Look", "Searching", "searching", "Search", "search"
		],
		[ // array[2] elements output if keywords triggered
			"Alright, this is what I have found,"
		]
	]; // end of 2D array
	
 /*	for(i = 0; i < ioStream.length; i++){
		for(j = 0; j < ioStream[i].length; j++){
			console.log(ioStream[i][j]);
		}
	}
*/ 
	
}

function inputLine(String input)
{
	//Splits up each word from the input parameter into an array of strings.
    	var array = input.split("  ");

    	for(int i = 0; i < input.length; i++)
   	 {
    	//variable word will be used to equal each word from the array and call the compareWords Function passing in
	//the word variable as a parameter
    	var word = array[i];
    	compareWords(word);
    	}

}

function compareWords(word, ioStream)
{
	for(int i = 0; i < ioStream.length; i++)
	{
	//if the word is equal tfo a word from the input array
	if(word == array[0][i][]
	{
	//TODO:finish this if statement
	}

	}
	
}
	   
//pseudocode notes for hackathon/////////////////////////////////////
	   /*
	   
	   main function() {

do while loop
{
	inputline function
	prompt the user if they are finished?
}
	 inputline function splits up words
	   send them to compareFunctione
	
	   comparewords function
	   compares word to keywords in elements 1 of array
	   if(book searching keyword)
		{
		call function --> searchBook()
		{
		go through all books 
		count how many matches 
		if( matches > 1 )
		{
		
		}
		
		}
		if( match == 1)
		{
		send the book information to the user
}
		{
			pull information of book like 
			-qr number
			-genre 
			-author
			-name
			-what floor
			-availability
		}
		
		
		}
	}
		if(recommendation keyboard)
		{
		call function ----> recommendBook()
			compareGenre(){
			1. prompt genres--> function compare genre with input
			print RandomBook
			prompt("Is this a book you would like to read");
			return book title;
		}
		
		if(booking for rooms keyword)
		{
			call their code -->	
		}
*/
