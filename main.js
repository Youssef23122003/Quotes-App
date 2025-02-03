var quotes = [
    `"Do not take life too seriously. You will not get out alive."<br><span class="mt-3 d-inline-block">--Elbert Hubbard</span>`,
    `"The best revenge is massive success."<br><span class="mt-3 d-inline-block">--Frank Sinatra</span>`,
    `"Its not what happens to you, but how you react to it that matters."<br><span class="mt-3 d-inline-block">--Epictetus</span>`,
    `"You miss 100% of the shots you dont take."<br><span class="mt-3 d-inline-block">--Wayne Gretz</span>`,
    `"Resentment is like drinking poison and waiting for your enemies to die."<br><span class="mt-3 d-inline-block">--Nelson Mandela</span>`
];

function getRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    console.log(randomIndex);
    var quote = quotes[randomIndex]
    document.getElementById('quote').innerHTML = quote
}

// Display a random quote when the page loads
// getRandomQuote();


   // var quote = quotes[randomIndex];


