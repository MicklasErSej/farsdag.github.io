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
},
{
    q: "How ready are you for today's mission?",
    a: ["Very ready", "Somewhat ready", "Not ready but excited"]
},
{
    q: "How ready are you for today's mission?",
    a: ["Very ready", "Somewhat ready", "Not ready but excited"]
},
{
    q: "How ready are you for today's mission?",
    a: ["Very ready", "Somewhat ready", "Not ready but excited"]
},
{
    q: "How ready are you for today's mission?",
    a: ["Very ready", "Somewhat ready", "Not ready but excited"]
},
{
    q: "How ready are you for today's mission?",
    a: ["Very ready", "Somewhat ready", "Not ready but excited"]
},
{
    q: "How ready are you for today's mission?",
    a: ["Very ready", "Somewhat ready", "Not ready but excited"]
},
{
    q: "How ready are you for today's mission?",
    a: ["Very ready", "Somewhat ready", "Not ready but excited"]
},
{
    q: "How ready are you for today's mission?",
    a: ["Very ready", "Somewhat ready", "Not ready but excited"]
},
{
    q: "How ready are you for today's mission?",
    a: ["Very ready", "Somewhat ready", "Not ready but excited"]
},
{
    q: "How ready are you for today's mission?",
    a: ["Very ready", "Somewhat ready", "Not ready but excited"]
},
{
    q: "How ready are you for today's mission?",
    a: ["Very ready", "Somewhat ready", "Not ready but excited"]
},
{
    q: "How ready are you for today's mission?",
    a: ["Very ready", "Somewhat ready", "Not ready but excited"]
}
];

let current = 0;

const content = document.getElementById("content");
const total = questions.length;

/* START */
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("startBtn").addEventListener("click", start);
});

function start(){

    current = 0;

    // hide title
    document.getElementById("header").style.display = "none";

    // show progress bar
    document.getElementById("progressWrap").style.display = "block";

    showQuestion();
}

function showQuestion(){

    updateProgress();

    const q = questions[current];

    content.innerHTML = `
        <h2>Question ${current + 1}</h2>

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

/* PROGRESS BAR */
function updateProgress(){
    const percent = Math.round((current / total) * 100);

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

    document.getElementById("questionBar").style.width = "100%";
    document.getElementById("progressText").innerText = "100%";

    content.innerHTML = `
        <h2>Mission Complete 🎉</h2>

        <p style="margin-top:10px;">
            Your surprise is ready.
        </p>

        <button id="giftBtn">Open Gift</button>
    `;

    document.getElementById("giftBtn").onclick = () => {

        document.body.innerHTML = `
            <div class="bridge">
                <div class="message">
                    <h1>Opening Gift</h1>
                    <p>Please wait...</p>
                </div>
            </div>
        `;

        setTimeout(() => {
            window.location.href = "https://www.google.com";
        }, 2500);
    };
}
