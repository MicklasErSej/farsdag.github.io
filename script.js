const questions = [
{
    q: "How ready are you for today's mission?",
    a: ["Very ready", "Somewhat ready", "Not ready but excited"]
},
{
    q: "Pick a companion:",
    a: ["A Viking", "A Golden Retriever", "Three raccoons"]
},
{
    q: "Choose a superpower:",
    a: ["Flying", "Mind reading", "Unlimited snacks"]
},
{
    q: "Energy level check:",
    a: ["100%", "Need coffee", "Send help"]
},
{
    q: "Final question: are you ready?",
    a: ["Yes", "Absolutely", "Let’s go"]
}
];

let current = 0;

const card = document.getElementById("card");
const totalQuestions = questions.length;

document.getElementById("startBtn").addEventListener("click", start);

function start(){
    showQuestion();
}

function showQuestion(){

    const q = questions[current];

    updateProgress();

    card.innerHTML = `
        <h1>Question ${current + 1}</h1>

        <p style="margin-top:10px; opacity:0.8;">
            ${q.q}
        </p>

        <div style="margin-top:20px;">
            ${q.a.map(ans => `
                <button onclick="next()">${ans}</button>
            `).join("")}
        </div>
    `;
}

function updateProgress(){
    const percent = Math.round((current / totalQuestions) * 100);

    document.getElementById("questionBar").style.width = percent + "%";
    document.getElementById("progressText").innerText = percent + "%";
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

    card.style.opacity = "0";
    card.style.transform = "translateY(10px)";

    setTimeout(() => {

        card.innerHTML = `
            <h1>Mission Complete 🎉</h1>

            <p style="margin-top:10px;">
                Your surprise is ready.
            </p>

            <button id="giftBtn">
                Open Gift
            </button>
        `;

        card.style.opacity = "1";
        card.style.transform = "translateY(0)";

        document.getElementById("giftBtn").onclick = () => {

            document.body.style.transition = "0.5s ease";
            document.body.style.opacity = "0";

            setTimeout(() => {
                window.location.href = "https://YOUR-GIFT-LINK";
            }, 500);
        };

    }, 400);
}
