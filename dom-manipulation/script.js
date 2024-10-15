let quotes = [{
    "text": "The will of man is his happiness.",
    "category": "happiness"
}, {
    "text": "I hope to find the roles that are age appropriate but not yearning to be younger, or parenting ad nauseam.",
    "category": "age"
}, {
    "text": "As a child, I had to get up early for school or work. I'd get ready by myself. I'd set my alarm to wake me up very early in the morning, and be off to work, the family driver driving me every morning. I did it alone, my parents never coming in to wake me up.",
    "category": "alone"
}, {
    "text": "I don't get a chance to do many of my own stunts on 'Buffy' - none of us do. We have amazing stunt people who make us all look really believable and really good.",
    "category": "amazing"
}, {
    "text": "To rule one's anger is well to prevent it is better.",
    "category": "anger"
}, {
    "text": "No rational argument will have a rational effect on a man who does not want to adopt a rational attitude.",
    "category": "attitude"
}, {
    "text": "Thankfully, beauty is easier to remove than apply, and a swipe of demaquillage in the right direction and you are you once again.",
    "category": "beauty"
}, {
    "text": "One cannot develop taste from what is of average quality but only from the very best.",
    "category": "best"
}, {
    "text": "The best car safety device is a rear-view mirror with a cop in it.",
    "category": "car"
}, {
    "text": "To be idle is a short road to death and to be diligent is a way of life foolish people are idle, wise people are diligent.",
    "category": "death"
    }];


createAddQuoteForm();

const showNewQuoteBtn = document.getElementById( 'newQuote' );
const quoteDisplay = document.getElementById( 'quoteDisplay' );
// const addQuoteBtn = document.

function showRandomQuote () {
    let random = Math.floor( Math.random() * quotes.length );
    quoteDisplay.innerHTML = quotes[random]['text'];
}

function createAddQuoteForm () {
    const div = document.createElement( 'div' );
    const quoteTextInput = document.createElement( 'input' );
    quoteTextInput.setAttribute( 'id', "newQuoteText" );
    quoteTextInput.setAttribute( 'type', "text" );
    quoteTextInput.setAttribute( 'placeholder', "Enter a new quote" );


    const quoteCategoryInput = document.createElement( 'input' );
    quoteCategoryInput.setAttribute( 'id', "newQuoteCategory" );
    quoteCategoryInput.setAttribute( 'type', "text" );
    quoteCategoryInput.setAttribute( 'placeholder', "Enter quote category" );

    
    const addQuoteBtn = document.createElement( 'button' );
    addQuoteBtn.textContent = "Add Quote";
    addQuoteBtn.onclick = () => addQuote();
    

    div.append( quoteTextInput, quoteCategoryInput, addQuoteBtn );
    document.body.appendChild( div );
}

function addQuote () {
    let newQuoteItems;
    let newQuoteText = document.getElementById( 'newQuoteText' ).value;
    let newQuoteCategory = document.getElementById( 'newQuoteCategory' ).value;
    if ( !newQuoteCategory || !newQuoteText ) {
        return;
    } else {
        newQuoteItems = {"text": newQuoteText, "category": newQuoteCategory};
        quotes.push( newQuoteItems );
        quoteDisplay.innerHTML = newQuoteCategory;
    }
    newQuoteText = "";
    newQuoteCategory = "";
}

showNewQuoteBtn.addEventListener( 'click', showRandomQuote )
