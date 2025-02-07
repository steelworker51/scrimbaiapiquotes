/*const quotes = [
    {
        quote: "Today is your opportunity to build the tomorrow you want.",
        author: "Ken Poirot"
    },
    {
        quote: "When you have a dream, you've got to grab it and never let go.",
        author: "Carol Burnett"
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "You define your own life. Don't let other people write your script.",
        author: "Oprah Winfrey"
    },
    {
        quote: "Someone once told me to never dream. I said NEVER SAY NEVER",
        author: "Justin Bieber"
    }
] */

// Array of quotes
const quotes = [
    "Today is your opportunity to build the tomorrow you want. - Ken Poirot",
    "The future depends on what you do today. - Mahatma Gandhi",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The only way to do great work is to love what you do. - Steve Jobs"
];

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to update the quote in the DOM
function updateQuote() {
    const quoteElement = document.getElementById("quoteText"); // Ensure the h1 or h2 has this id
    quoteElement.textContent = getRandomQuote();
}

// Add event listener to #box to change the quote on click
const box = document.getElementById("box");
box.addEventListener("click", updateQuote);

// Call updateQuote once to show an initial quote
updateQuote();
