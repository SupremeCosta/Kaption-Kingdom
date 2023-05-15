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