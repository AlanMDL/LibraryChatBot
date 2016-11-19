const PROMPT = 0;
const KEYWORD = 1;
const OUTPUT = 2;
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

//choose random index from the array of greeting from ioStream[prompt];
var randomNumber = Math.floor( Math.random() * ( ioStream[PROMPT].length - 1) );

function main()
{
    
    //prompts the user with a random greeting and stores their response to input
    var input = prompt(ioStream[PROMPT[randomNumber]]);

	inputLine(input);//calls the inputLine function with the input as parameter
}

/*@Function: Splits up each word from the input and sends the word to compare.
 *@param: input Line received 
 *@Return: no return
*/
function inputLine(input)
{
    	var array = input.split("  "); 	//Splits up each word from the input parameter into an array of strings.
    	
        var word = "";//initializes word variable to blank

        for(int i = 0; i < input.length; i++)
   	 	{
    		word = array[i];// word pulled from the array of words
    		compareWords(word);//calls compareWords function with word as parameter
    	}
        
}

/*@Function: Compares word sent in to see if it matches with any keywords
 * if any key words match, call a certain function according to keyword that matches.
 *@param: input Line received 
 *@Return: Undecided
*/
function compareWords(word)
{
	for(int i = 0; i < ioStream[KEYWORD].length; i++)
	{
        //for now lets assume keyword are for book searching....
		if( word == ioStream[KEYWORD[i]] )//Compares word to each keyword in the array[input]
		{
		searchBook();//calls searchBook function to start book search
		}

        //need to add if statement for recommendation keywords

        //need to add if statement for booking for rooms keyword

	}
}

function compareGenre()
{

}


function recommendBook()
{

}



function searchBook()
{
    var someBook = prompt("What book title are you looking for?");//prompts user and retrieves response
    var array = someBook.split("  ");
    var matches = 0;
    var matchedBooks[100];

    for(int i = 0; i < array.length;i++)
    {
        for(int j = 0; j < bookArray.length;j++)
        {
            if(array[i] == bookArray[j])
            {
                matches = matches + 1;
                matchedBooks[i] = bookArray[j];
            }
        }
    }
    
    if(matches > 1)
    {    
        console.log("There was more than 1 book found, outputting all matched books");
        for(int i = 0; i < matchedBooks.length;i++)
        {
        console.log(matchedBooks(i));       
        }
    }
    else if (matches == 1)
    {
        console.log(matchedBooks[matches]); 
    }
}
	   
function bookArray 
{
    var qrNumber = 0;
    var genre = "";
    var author = "";
    var name = "";
    var floor = 0;
    var availability = true;
}


/* TODO LIST
Create a class that holds data variables about book information called bookArray
Finish searchBook function
Finish 



*/




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
