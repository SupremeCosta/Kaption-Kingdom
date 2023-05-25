// These are the element selectors
var quoteEl = $("#quote-text");
var authorEl = $("#quote-author");
var twitterBtnEl = $("#twitter-button");
var whatsAppBtnEl = $("#whatsapp-button");
var copyBtnEl = $("#copy-button");
var generateBtnEl = $("#generate-button");

// Initialize quoteText and authorText
var quoteText = "";
var authorText = "";

// Fetch a quote when the page loads
fetchAffirmation();

// Function to fetch and update the quote
function fetchAffirmation() {
  var affirmationPool = [
    "I am worthy of love and happiness.",
    "I believe in my abilities and can achieve anything I set my mind to.",
    "I am grateful for all the positive things in my life.",
    "I am deserving of success and prosperity.",
    "I choose to focus on the present moment and find joy in it.",
    "I am confident and capable of handling any challenges that come my way.",
    "I trust myself to make the best decisions for my life.",
    "I am surrounded by loving and supportive people.",
    "I am resilient and can bounce back from any setback.",
    "I am in control of my own happiness and choose to be positive.",
    "I am open to new opportunities and embrace change.",
    "I am capable of learning and growing every day.",
    "I release all negative thoughts and replace them with positive ones.",
    "I am deserving of love and give love freely.",
    "I am proud of my accomplishments and celebrate my successes.",
    "I am filled with confidence and believe in my own abilities.",
    "I am at peace with myself and the world around me.",
    "I am capable of achieving greatness.",
    "I am deserving of abundance and attract it into my life.",
    "I am surrounded by abundance in all areas of my life.",
    "I am grateful for my body and treat it with love and respect.",
    "I radiate love and positivity to those around me.",
    "I am resilient and can overcome any obstacle.",
    "I am grateful for the opportunities that come my way.",
    "I trust the universe to guide me towards my highest good.",
    "I am confident in my own unique talents and abilities.",
    "I am worthy of success and achieve it with ease.",
    "I am in control of my own thoughts and choose positivity.",
    "I am surrounded by positive and supportive energy.",
    "I am loved and appreciated for who I am.",
    "I am grateful for the simple pleasures in life.",
    "I am deserving of respect and treat others with respect as well.",
    "I am open to receiving love and abundance from the universe.",
    "I am creating a life filled with happiness and fulfillment.",
    "I am deserving of all the good things that come my way.",
    "I am confident in my own unique journey and trust the process.",
    "I am capable of achieving balance in all areas of my life.",
    "I am grateful for the lessons I've learned and the growth I've experienced.",
    "I am surrounded by positive and uplifting people.",
    "I am deserving of self-care and prioritize it in my life.",
    "I am grateful for the opportunities to learn and grow.",
    "I am worthy of forgiveness and choose to forgive myself and others.",
    "I am capable of creating the life I desire.",
    "I am open to receiving guidance and support from the universe.",
    "I am enough just as I am.",
    "I am grateful for the abundance that flows into my life.",
    "I am confident in my ability to handle challenges with grace and strength.",
    "I am deserving of happiness and allow it to fill my life.",
    "I am at peace with myself and the choices I make.",
    "I am worthy of love and give love freely.",
    "I am grateful for the blessings in my life.",
    "I am open to new possibilities and embrace them with excitement.",
  ];

  var affirmationPoolIndex = Math.floor(Math.random() * 50);
  quoteText = affirmationPool[affirmationPoolIndex];
  quoteEl.text(quoteText);
  authorEl.empty();

  // Update Twitter Button functionality
  twitterBtnEl.attr(
    "href",
    "https://twitter.com/intent/tweet?text=" + quoteText + "%20" + authorText
  );

  // Update WhatsApp Button functionality
  whatsAppBtnEl.attr(
    "href",
    "https://api.whatsapp.com/send?text=" + quoteText + "%20" + authorText
  );
}

// Generate Button click event
$(document).on("click", "#generate-button", function () {
  var selectedCategory = $("#category-dropdown").val();

  if (selectedCategory === "affirmations") {
    fetchAffirmation();
  } else if (selectedCategory === "inspiration") {
    // Fetch inspiration quote using a different API
    fetch("https://api.goprogram.ai/inspiration?random=" + Math.random())
      .then((response) => response.json())
      .then((data) => {
        quoteText = '"' + data.quote + '"';
        authorText = "-- " + data.author;
        quoteEl.text(quoteText);
        authorEl.text(authorText);

        // Update Twitter Button functionality
        twitterBtnEl.attr(
          "href",
          "https://twitter.com/intent/tweet?text=" +
            quoteText +
            "%20" +
            authorText
        );

        // Update WhatsApp Button Functionality
        whatsAppBtnEl.attr(
          "href",
          "https://api.whatsapp.com/send?text=" + quoteText + "%20" + authorText
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else if (selectedCategory === "jokes") {
    // Fetch a random joke
    fetch(
      "https://official-joke-api.appspot.com/random_joke?random=" +
        Math.random()
    )
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

  // Open modal
  $("#copy-modal").addClass("is-active");
});

