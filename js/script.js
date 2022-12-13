/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: "I'll be back.",
    source: "The Terminator",
    year: 1991,
    citation: "Terminator 2: Judgment Day",
    tag: "SyFy"
  },
  {
    quote: "No. Strike me down in anger and I'll always be with you. Just like your father.",
    source: "Luke Skywalker",
    year: 2017,
    citation: "Star Wars: The Last Jedi",
    tag: "SyFy"
  },
  {
    quote: "If you want to be sure that you never forget your wife’s birthday, just try forgetting it once.",
    source: "Aldo Cammarota",
    citation: "Readers Digest",
    tag: "Humor"
  },
  {
    quote: "If you think dogs can’t count, try putting three dog biscuits in your pocket and then giving Fido only two of them.",
    source: "Phil Pastoret",
    citation: "Quotery",
    tag: "Humor"
  },
  {
    quote: "Judge each day not by the harvest you reap but by the seeds you plant.",
    source: "William Arthur Ward",
    year: 1963,
    citation: "Oklahoma City Star",
    tag: "Motivational"
  },
  {
    quote: "Success is not final, failure is not fatal, it is the courage to continue that counts.",
    source: "Winston Churchill",
    year: 1940,
    tag: "Motivational"
  }
];

/***
 * `getRandomQuote` function
***/

/**
* Generate a quote and return the updated message
* @param {array} arr - input array to search
* @param {number} num iput index of array to locate an object within the array
* @return {message} message to be printed in HTML tags
*/
let getRandomQuote = () => {
  //initialize variables
  let date;
  let cit;
  let randomQuote;
  //random number = i
  let i = Math.floor( Math.random() * quotes.length );

  // Extract information from random object in quotes array and begin building random quote obj
  let sentence = `${quotes[i].quote}`;
  let src = `${quotes[i].source}`;

  randomQuote = {
    quote: sentence,
    source: src
  };

  // Conditional
  if ( quotes[i].year !== undefined ) {
    randomQuote.year = quotes[i].year;
  }
  if ( quotes[i].citation !== undefined ) {
    randomQuote.citation = quotes[i].citation;
  }

  console.log(randomQuote);
}

getRandomQuote();

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// document.getElementById('load-quote').addEventListener("click", printQuote, false);