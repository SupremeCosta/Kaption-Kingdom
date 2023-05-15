// These are the element selectors
var quoteEl = $('#quote-text')
var authorEl = $('#quote-author')
var twitterBtnEl = $('#twitter-button')
var copyBtnEl = $('#copy-button')

// I commented out the actual variables for now. When we have the API working,
// I will uncomment them and delete the placeholder variables:

// var quoteText = quoteEl.text()
// var authorText = authorEl.text()

// Placeholder variables:
var quoteText = 'I like pizza'
var authorText = 'Me'


// Twitter Button functionality
twitterBtnEl.on('click', function () {
  twitterBtnEl.attr('href', 'https://twitter.com/intent/tweet?text=%22' + quoteText + '%22%20--%20' + authorText)
})


// Facebook Button funcitonality


// Copy Button funcitonality
copyBtnEl.on('click', function () {
  var text = quoteText + " --" + authorText;

  // Create 'input' element with the generated text as its value
  var tempInput = $('<input>');
  tempInput.val(text);

  // Append the 'input' element to the 'body' element
  $('body').append(tempInput);

  // Select the 'input' element with the generated text, copy it
  // with the execCommand method of the document object, and delete
  // the 'input' element after it is copied to the clipboard
  tempInput.select();
  document.execCommand('copy');
  tempInput.remove();

  // This alert is a placeholder. We have to change it to a 
  // modal to let the user know the Text was copied to the clipboard.
  alert('Text copied to clipboard!');
});