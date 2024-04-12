// Constant variables to select the elements to be manipulated
const randomquote = document.getElementById('randomquote');
const quoteAuthor = document.getElementById('authorname');
const generatequoteButton = document.getElementById('newquote');
const copyquote = document.getElementById('copyquote');
const likeButton = document.getElementById('likeButton'); // Select the like button

// function that generates a random quote using an API
function generateQuote() {
    fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(result => {
            randomquote.textContent = result.content;
            quoteAuthor.textContent = result.author;
            updateLikeButton(); // Update like button when a new quote is generated
        });
    
    // Remove the 'liked' class from the like button
    likeButton.classList.remove('liked');
}

generatequoteButton.addEventListener("click", generateQuote);

// to copy the quote to clipboard when you click the copy button
copyquote.addEventListener("click", function () {
    const quoteText = randomquote.textContent;
    const textArea = document.createElement("textarea");
    textArea.value = quoteText;

    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    alert("Quote copied to clipboard.");
});

// Function to handle liking a quote
function likeQuote() {
    if (likeButton.classList.contains('liked')) {
        likeButton.classList.remove('liked');
        // Additional logic for unliking a quote
        console.log("Quote unliked");
    } else {
        likeButton.classList.add('liked');
        // Additional logic for liking a quote
        console.log("Quote liked");
        const quoteText = randomquote.textContent;
        alert("You liked the quote: " + quoteText); // Alert when a quote is liked
    }
}

likeButton.addEventListener("click", likeQuote);
