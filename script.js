const images = [
    "hinduImages/14615.jpg",
    "hinduImages/21963.jpg",
    "hinduImages/475892.jpg",
    "hinduImages/504993.jpg",
    "hinduImages/504996.jpg",
    "hinduImages/505003.jpg",
    "hinduImages/505004.jpg",
    "hinduImages/505005.jpg",
    "hinduImages/505007.jpg",
    "hinduImages/505008.jpg",
    "hinduImages/505010.jpg",
    "hinduImages/505015.jpg",
    "hinduImages/505017.jpg",
    "hinduImages/505018.jpg",
    "hinduImages/505021.jpg",
    "hinduImages/505061.jpg",
    "hinduImages/505065.jpg"
];

document.addEventListener("DOMContentLoaded", function() {
    const englishQuoteElement = document.getElementById("english-quote");
    const sanskritQuoteElement = document.getElementById("sanskrit-quote");
    const citationElement = document.getElementById("citation");
    const authorElement = document.getElementById("author");
    const toggleButton = document.getElementById("toggle-sanskrit");

    document.body.style.backgroundImage = `url(${images[Math.floor(Math.random() * images.length)]})`;

    // Fetch quotes from quotes.json
    fetch("quotes.json")
        .then((response) => response.json())
        .then((data) => {
            const originalQuotes = data; // Store fetched quotes
            let quotes = [...originalQuotes]; // Make a copy for shuffling

            // Function to shuffle the quotes array randomly
            function shuffleArray(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }

            // Function to select a random quote from the array
            function getRandomQuote() {
                // Shuffle the quotes array randomly
                shuffleArray(quotes);
                // Return and remove the first quote from the array
                return quotes.shift();
            }

            // Function to display a quote
            function displayQuote() {
                // If all quotes have been displayed, reset the array
                if (quotes.length === 0) {
                    quotes = [...originalQuotes];
                }

                // Get a random quote from the array
                const quote = getRandomQuote();

                // Display the quote
                englishQuoteElement.textContent = quote.english;
                sanskritQuoteElement.textContent = quote.sanskrit;
                authorElement.textContent = `— ${quote.author}`;
                citationElement.textContent = quote.citation;
            }

            // Show or hide Sanskrit version
            toggleButton.addEventListener("click", function() {
                if (sanskritQuoteElement.style.display === "none") {
                    sanskritQuoteElement.style.display = "block";
                    toggleButton.textContent = "Hide Sanskrit";
                } else {
                    sanskritQuoteElement.style.display = "none";
                    toggleButton.textContent = "Show Sanskrit";
                }
            });

            // Initialize
            displayQuote();
        })
        .catch((e) => console.log("error", e));
});
