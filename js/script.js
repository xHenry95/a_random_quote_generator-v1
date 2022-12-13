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
    author: "The Terminator",
    year: 1991,
    Citation: "Terminator 2: Judgment Day",
    tag: "SyFy"
  },
  {
    quote: "No. Strike me down in anger and I'll always be with you. Just like your father.",
    author: "Luke Skywalker",
    year: 2017,
    Citation: "Star Wars: The Last Jedi",
    tag: "SyFy"
  },
  {
    quote: "If you want to be sure that you never forget your wife’s birthday, just try forgetting it once.",
    author: "Aldo Cammarota",
    year: 0,
    Citation: "Readers Digest",
    tag: "Humor"
  },
  {
    quote: "If you think dogs can’t count, try putting three dog biscuits in your pocket and then giving Fido only two of them.",
    author: "Phil Pastoret",
    year: 0,
    Citation: "Quotery",
    tag: "Humor"
  },
  {
    quote: "Judge each day not by the harvest you reap but by the seeds you plant.",
    author: "William Arthur Ward",
    year: 1963,
    Citation: "Oklahoma City Star",
    tag: "Motivational"
  },
  {
    quote: "Success is not final, failure is not fatal, it is the courage to continue that counts.",
    author: "Winston Churchill",
    year: 1940,
    Citation: "",
    tag: "Motivational"
  }
];

/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);