// These are the element selectors
var quoteEl = $("#quote-text");
var authorEl = $("#quote-author");
var twitterBtnEl = $("#twitter-button");
var whatsAppBtnEl = $('#whatsapp-button');
var copyBtnEl = $("#copy-button");
var generateBtnEl = $("#generate-button");

// Initialize quoteText and authorText
var quoteText = "";
var authorText = "";

// Fetch a quote when the page loads
fetchQuote();

// Function to fetch and update the quote
function fetchQuote() {
  fetch("https://api.themotivate365.com/stoic-quote?random=" + Math.random())
    .then((response) => response.json())
    .then((data) => {
      quoteText = '"' + data.quote + '"';
      authorText = '-- ' + data.author;
      quoteEl.text(quoteText);
      authorEl.text(authorText);

      // Update Twitter Button functionality
      twitterBtnEl.attr(
        "href",
        "https://twitter.com/intent/tweet?text=%22" +
          quoteText +
          "%22%20--%20" +
          authorText
      );

      // Update WhatsApp Button functionality
      whatsAppBtnEl.attr(
        "href",
        "https://api.whatsapp.com/send?text=%22" +
          quoteText +
          "%22%20--%20" +
          authorText
      );
    })
    .catch((error) => {
      console.error("Error fetching API:", error);
    });
}

// Generate Button click event
$(document).on("click", "#generate-button", function () {
  var selectedCategory = $("#category-dropdown").val();

  if (selectedCategory === "affirmations") {
    fetchQuote();
  } else if (selectedCategory === "inspiration") {
    // Fetch inspiration quote using a different API
    fetch("https://api.goprogram.ai/inspiration?random=" + Math.random())
      .then((response) => response.json())
      .then((data) => {
        quoteText = '"' + data.quote + '"';
        authorText = '-- ' + data.author;
        quoteEl.text(quoteText);
        authorEl.text(authorText);

        // Update Twitter Button functionality
        twitterBtnEl.attr(
          "href",
          "https://twitter.com/intent/tweet?text=%22" +
            quoteText +
            "%22%20--%20" +
            authorText
        );

        // Update WhatsApp Button Functionality
        whatsAppBtnEl.attr(
          "href",
          "https://api.whatsapp.com/send?text=%22" +
            quoteText +
            "%22%20--%20" +
            authorText
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else if (selectedCategory === "jokes") {
    // Fetch a random joke
    fetch("https://official-joke-api.appspot.com/random_joke?random=" + Math.random())
      .then((response) => response.json())
      .then((data) => {
        quoteText = data.setup + " " + data.punchline;
        quoteEl.text(quoteText);
        authorEl.empty();

        // Update Twitter Button functionality
        twitterBtnEl.attr(
          "href",
          "https://twitter.com/intent/tweet?text=%22" + quoteText
        );

        whatsAppBtnEl.attr(
          "href",
          "https://api.whatsapp.com/send?text=%22" + quoteText
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    console.error("Invalid category selected");
  }
});

// Copy Button funcitonality
copyBtnEl.on("click", function () {
  var text = quoteText + " --" + authorText;

  // Create 'input' element with the generated text as its value
  var tempInput = $("<input>");
  tempInput.val(text);

  // Append the 'input' element to the 'body' element
  $("body").append(tempInput);

  // Select the 'input' element with the generated text, copy it
  // with the execCommand method of the document object, and delete
  // the 'input' element after it is copied to the clipboard
  tempInput.select();
  document.execCommand("copy");
  tempInput.remove();

  // This alert is a placeholder. We have to change it to a
  // modal to let the user know the Text was copied to the clipboard.
  alert("Text copied to clipboard!");
});
