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

    // fade out current card
    card.style.transition = "0.4s ease";
    card.style.opacity = "0";
    card.style.transform = "translateY(10px)";

    setTimeout(() => {

        card.innerHTML = `
            <h1>Mission Complete 🎉</h1>

            <p style="margin-top:10px;">
                Well done Dad.<br><br>
                Your birthday surprise is ready.
            </p>

            <button id="giftBtn" style="opacity:0; transform:translateY(10px);">
                Open Gift
            </button>
        `;

        // fade in new content
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

            const btn = document.getElementById("giftBtn");

            btn.onclick = () => {
                window.location.href = "YOUR-GIFT-LINK";
            };

            // smooth button reveal
            setTimeout(() => {
                btn.style.transition = "0.5s ease";
                btn.style.opacity = "1";
                btn.style.transform = "translateY(0)";
            }, 150);

        }, 50);

    }, 400);
}
