let quotes = [{
    "quote": "The will of man is his happiness.",
    "category": "happiness"
}, {
    "quote": "I hope to find the roles that are age appropriate but not yearning to be younger, or parenting ad nauseam.",
    "category": "age"
}, {
    "quote": "As a child, I had to get up early for school or work. I'd get ready by myself. I'd set my alarm to wake me up very early in the morning, and be off to work, the family driver driving me every morning. I did it alone, my parents never coming in to wake me up.",
    "category": "alone"
}, {
    "quote": "I don't get a chance to do many of my own stunts on 'Buffy' - none of us do. We have amazing stunt people who make us all look really believable and really good.",
    "category": "amazing"
}, {
    "quote": "To rule one's anger is well to prevent it is better.",
    "category": "anger"
}, {
    "quote": "No rational argument will have a rational effect on a man who does not want to adopt a rational attitude.",
    "category": "attitude"
}, {
    "quote": "Thankfully, beauty is easier to remove than apply, and a swipe of demaquillage in the right direction and you are you once again.",
    "category": "beauty"
}, {
    "quote": "One cannot develop taste from what is of average quality but only from the very best.",
    "category": "best"
}, {
    "quote": "The best car safety device is a rear-view mirror with a cop in it.",
    "category": "car"
}, {
    "quote": "To be idle is a short road to death and to be diligent is a way of life foolish people are idle, wise people are diligent.",
    "category": "death"
    }];

const showNewQuoteBtn = document.getElementById( 'newQuote' );
const quoteDisplay = document.getElementById( 'quoteDisplay' );
// const addQuoteBtn = document.

function showRandomQuote () {
    let random = Math.floor( Math.random() * quotes.length );
    quoteDisplay.innerHTML = quotes[random]['quote'];
}

function addQuote () {
    let newQuoteItems;
    let newQuoteText = document.getElementById( 'newQuoteText' ).value;
    let newQuoteCategory = document.getElementById( 'newQuoteCategory' ).value;
    if ( !newQuoteCategory || !newQuoteText ) {
        return;
    } else {
        newQuoteItems = {"quote": newQuoteText, "category": newQuoteCategory};
        quotes.push( newQuoteItems );
        quoteDisplay.innerHTML = newQuoteCategory;
    }
    newQuoteText = "";
    newQuoteCategory = "";
}

showNewQuoteBtn.addEventListener('click', showRandomQuote)