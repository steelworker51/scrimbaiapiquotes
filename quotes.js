// Function to fetch a random quote from the API
async function fetchRandomQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        return `${data.content} - ${data.author}`;
    } catch (error) {
        console.error('Error fetching quote:', error);
        return 'An error occurred while fetching the quote.';
    }
}

// Function to update the quote in the DOM
async function updateQuote() {
    const quoteElement = document.getElementById("quoteText");
    const newQuote = await fetchRandomQuote();
    quoteElement.textContent = newQuote;
}

// Add event listener to #box to change the quote on click
const box = document.getElementById("box");
box.addEventListener("click", updateQuote);

// Call updateQuote once to show an initial quote
updateQuote();
