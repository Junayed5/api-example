const loadQuots = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}

const displayQuote = quote => {
    const quotElement = document.getElementById('quots');
    quotElement.innerText = quote.quote
}