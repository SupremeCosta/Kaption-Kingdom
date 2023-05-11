// These are the element selectors
var quoteEl = $('#quote-text')
var authorEl = $('#quote-author')
var twitterBtnEl = $('#twitter-button')

// I commented out the actual variables for now. When we have the API working,
// I will uncomment them and delete the placeholder variables:

// var quoteText = quoteEl.text()
// var authorText = authorEl.text()

// Placeholder variables:
var quoteText = 'I like pizza'
var authorText = 'Me'


// Function for Tweet Button
function shareTweet() {
    twitterBtnEl.attr('href', 'https://twitter.com/intent/tweet?text=%22' + quoteText + '%22%20--%20' + authorText)
}

// Event listener for Tweet Button
twitterBtnEl.on('click', shareTweet)


// Function for Facebook Button
// WIP

// Fetches a random inspirational quote from the Go Program API at https://api.goprogram.ai/inspiration. //

console.log(quoteText)
fetch('https://api.goprogram.ai/inspiration')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    quoteText = data.quote;
    authorText = data.author;
    // quoteEl.text(quoteText)<<<-----//TEST//SHOWS ACTUAL TEXT ON PAGE//
    // authorEl.text(authorText) <<<-----//TEST//SHOWS ACTUAL TEXT ON PAGE//

  })
  .catch(error => {
    console.error('Error:', error);
  });

// Fetches a random joke from the "Official Joke API" at https://official-joke-api.appspot.com/random_joke. //

fetch('https://official-joke-api.appspot.com/random_joke')
  .then(response => response.json())
  .then(data => {
    quoteText = data.setup + ' ' +  data.punchline;

    // quoteEl.text(quoteText)<<<-----//TEST//SHOWS ACTUAL TEXT ON PAGE//
    
  })
  .catch(error => {
    console.error('Error:', error);
  });


  
// Fetch an affirmation from the "affirmations.dev" API using client-side code in the browser







// trying to find a affirmations alternative dont delete will clean up later//

// fetch('https://www.affirmations.dev')
//   .then(response => response.text())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

// fetch('https://www.affirmations.dev/', { mode: 'no-cors' })
//   .then(response => response.text())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));


  