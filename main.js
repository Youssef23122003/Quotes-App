const quotes = [
    `"Do not take life too seriously. You will not get out alive."<br><span class="mt-3 d-inline-block">--Elbert Hubbard</span>`,
    `"The best revenge is massive success."<br><span class="mt-3 d-inline-block">--Frank Sinatra</span>`,
    `"It's not what happens to you, but how you react to it that matters."<br><span class="mt-3 d-inline-block">--Epictetus</span>`,
    `"You miss 100% of the shots you don't take."<br><span class="mt-3 d-inline-block">--Wayne Gretzky</span>`,
    `"Resentment is like drinking poison and waiting for your enemies to die."<br><span class="mt-3 d-inline-block">--Nelson Mandela</span>`
];

let previousIndex = -1;

function getRandomQuote() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === previousIndex && quotes.length > 1);
    
    previousIndex = randomIndex;
    const quoteElement = document.getElementById('quote');
    
    // Fade out
    quoteElement.style.opacity = '0';
    
    setTimeout(() => {
        quoteElement.innerHTML = quotes[randomIndex];
        // Fade in
        quoteElement.style.opacity = '1';
    }, 300);
}

// Display a random quote when the page loads
document.addEventListener('DOMContentLoaded', getRandomQuote);


   // var quote = quotes[randomIndex];


