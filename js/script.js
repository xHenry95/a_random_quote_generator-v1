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
* Generate a random number, use that to extract a random quote from the quotes array and return a new object
* @return {randomQuote} the randomly selected quote to print on the screen
*/
let getRandomQuote = () => {
  //initialize variables
  let randomQuote;
  //random number = i
  let i = Math.floor( Math.random() * quotes.length );

  //Extract information from random object in quotes array and begin building randomQuote obj
  randomQuote = {
    quote: quotes[i].quote,
    source: quotes[i].source,
    tag: quotes[i].tag
  };

  //Conditional to add citation or year if available
  if ( quotes[i].year !== undefined ) {
    randomQuote.year = quotes[i].year;
  }
  if ( quotes[i].citation !== undefined ) {
    randomQuote.citation = quotes[i].citation;
  }

  // console.log(i, randomQuote);
  return randomQuote;
}

/***
 * `printQuote` function
***/
function printQuote() {
  //Inserting randomQuote object properties into a new HTML variable
  let quoteToShow = getRandomQuote();
  let html = `
    <p class="quote">${quoteToShow.quote}</p>
    <p class="source">${quoteToShow.source}
  `;

  if ( quoteToShow.citation !== undefined ) {
    html += `<span class="citation">${quoteToShow.citation}</span>`;
  }
  if ( quoteToShow.year !== undefined ) {
    html += `<span class="year">${quoteToShow.year}</span>`;
  }
  if ( quoteToShow.tag !== undefined ) {
    html += `<span class="year">  ${quoteToShow.tag}</span>`;
  }

  html += `</p>`;

  document.getElementById('quote-box').innerHTML = html; 
}

printQuote();

// Generate random background color
function randomRGB() {
  const red = Math.floor( Math.random() * 255 );
  const green = Math.floor( Math.random() * 255 );
  const blue = Math.floor( Math.random() * 255 );

  // set background color
  document.body.style.background = `rgb(${red}, ${green}, ${blue})`;
}

// Automatic quote generation with timing interval
setInterval(printQuote, 15000);
setInterval(randomRGB, 15000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);

// Copying code above to action background color change on click
document.getElementById('load-quote').addEventListener("click", randomRGB, false);

