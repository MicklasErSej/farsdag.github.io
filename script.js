const questions = [
"How ready are you for today's mission?",
"Pick a companion:",
"Choose a power:",
"Energy level check:",
"Final question: are you ready?"
];

let current = 0;

const card = document.getElementById("card");

document.getElementById("startBtn").addEventListener("click", start);

function start(){
    showQuestion();
}

function showQuestion(){

    card.innerHTML = `
        <h1>Question ${current + 1}</h1>

        <p style="margin-top:10px;">
            ${questions[current]}
        </p>

        <button onclick="next()">Option 1</button>
        <button onclick="next()">Option 2</button>
        <button onclick="next()">Option 3</button>
    `;
}

function next(){

    current++;

    if(current >= questions.length){
        finish();
        return;
    }

    showQuestion();
}

function finish(){

    card.innerHTML = `
        <h1>Mission Complete 🎉</h1>

        <p>
        Well done Dad.<br><br>
        Your birthday surprise is ready.
        </p>

        <button onclick="window.location.href='www.google.com'">
            Open Gift
        </button>
    `;
}
