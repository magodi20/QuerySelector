let newQuoteButton = document.getElementById('new-quote');
let text = document.getElementById('text');
let author = document.getElementById('author');
let tweetQuotelink = document.getElementById('tweet-quote');

newQuoteButton.addEventListener('click', (e) => {
    addNewQuote();
})




const QUOTE_URL = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";




function addNewQuote() {
    const promise = fetch(QUOTE_URL);
    promise
        .then((response) => {
            return response.json();

        })

        .then(function (response) {
            text.innerHTML = response.quotes[0].text;
            author.innerHTML = response.quotes[0].author;
            tweetQuotelink.href = `https://twitter.com/intent/tweet?text=${encodeURI(`"${text.innerHTML}" - ${author.innerHTML}`)}`


        })






}

addNewQuote()



