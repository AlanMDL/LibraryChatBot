const PROMPT = 0;
const KEYWORD= 1;
const OUTPUT = 2;

var ioStream = [ //start 2d array
	[  //array[0] elements the prompts
		"Hello, Welcome to the Library! Could I help you find a book?",
		"Welcome to the Library! Are you looking for a book or shall I recommend one for you?",
		"Hello Welcome! What can I do for you today?"
	],
	[ //array[1] elements input key words
		"Looking", "looking", "look", "Look", "Searching", "searching", "Search", "search",
		"Booking", "booking", "Room", "room", "Study", "study", "recommending", "Recommending",
		"recommend", "Recommend", "adventure", "sci-fi", "sci fi", "mystery", "fantasy", "romantic",
		"romance", "thriller", 
		//list genre's here as well ********************
	],
	[ // array[2] elements output if keywords triggered
		"Alright, this is what I have found,"
	]
]; // end of 2D array

/*@Function: Function called when button is clicked. Stores input.
 *@param: no parameter
 *@Return: no return
*/
function myFunction() {
	var input = document.getElementById("myText").value;
	inputLine(input);
	//document.getElementById("chatbox").innerHTML = ;
}


/*@Function: Splits up each word from the input and sends the word to compare.
 *@param: input Line received 
 *@Return: no return
*/
function inputLine(input)
{
	var word;
    var array = input.split(" "); 	//Splits up each word from the input parameter into an array of strings.
    for(var i = 0; i < array.length; i++)
    {
    	word = array[i]; // word pulled from the array of words
    	compareWords(word); 
	}
}

/*@Function: Compares word sent in to see if it matches with any keywords
 * if any key words match, call a certain function according to keyword that matches.
 *@param: input Line received 
 *@Return: Undecided
*/
function compareWords(word)
{
	for(var i = 0; i < ioStream[KEYWORD].length; i++)
	{
		if(word == ioStream[KEYWORD][i]) //if the word is equal to a word from the input array
		{
			//nested if statements according to keywords found.
			if(i > 7 && i < 14){
				// related to booking rooms.
				console.log("booking rooms");
			}
			else if (i <= 7){
				// related to looking for a book.
				//searchBook();
				console.log("searching for a book");
			}
			else if (i >= 14 ){
				// related to recommending a book.
				//recommendBook();
				console.log("book recommendation");
			}
			else if (){
				// for finding genre keyswords, call compareGenre();
			}
		}
	}
}

// new from here down.

/*@Function: Prompts user to enter a few genres, and recommends a book according to that genre.
 *@param: no param
 *@Return: no return type
*/
/*
function recommendBook()
{
	console.log("Enter a genre or a few genres you are interested in");// prompt for genres
	// read input for genres, possibly to store in an array easier to send as param.
	var bookTitle = compareGenre(arrayOfGenres);// call compare genres
	// 
	do {
		//grab info of book title by calling searchBook
		searchBook(bookTitle);
		//prompt if they liked the title or if we should recommend a new book.
	} while(users input != yes)
}

/*@Function: Compares genres that user is interested with books.
 *@param: the array of genres
 *@Return: Returns a book title based on the genres given.
*/

/* --------------------
function compareGenre(arrayOfGenres)
{
	// each book object should have a genre component, compare that to input.
	// return book title.
	
}

/*
// No clue what is going on here, I'll save this for last lol.
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

// Not sure about this function either. Will look at it later.	   
function bookArray()
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

	   
//pseudocode notes for hackathon/////////////////////////////////////
	   /*
	   
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
