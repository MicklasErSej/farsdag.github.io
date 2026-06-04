const questions = [
{
    q: "How ready are you for today's mission?",
    a: ["Very ready", "Somewhat ready", "Not ready but curious"]
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
    a: ["100%", "Needs coffee", "Send help"]
},

{
    q: "Final question: are you ready?",
    a: ["Yes", "Absolutely", "Let’s go"]
}
];

let current = 0;

const card = document.getElementById("card");

document.getElementById("startBtn").addEventListener("click", start);

function start(){
    showQuestion();
}

function showQuestion(){

    const q = questions[current];

    card.innerHTML = `
        <h1>Question ${current + 1}</h1>

        <p style="margin-top:10px; opacity:0.8;">
            ${q.q}
        </p>

        <div style="margin-top:20px;">
            ${q.a.map(answer => `
                <button onclick="next()">
                    ${answer}
                </button>
            `).join("")}
        </div>
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

const totalQuestions = questions.length;

function finish(){

    // smooth fade out first
    card.style.transition = "0.7s ease";
    card.style.opacity = "0";
    card.style.transform = "translateY(10px)";

    setTimeout(() => {

        card.innerHTML = `
            <h1>Mission Complete 🎉</h1>

            <p style="margin-top:10px; opacity:0.8;">
                Well done Dad.<br><br>
                Preparing your gift...
            </p>

            <button id="giftBtn" style="opacity:0; transform:translateY(10px);">
                Open Gift
            </button>
        `;

        // fade card back in
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

            const btn = document.getElementById("giftBtn");

            btn.onclick = () => {

                document.body.innerHTML = `
                    <div class="bridge">
                        <div class="message">
                            <h1>Opening Gift...</h1>
                            <p>Please wait while we prepare your surprise.</p>
                        </div>
                    </div>
                `;

                setTimeout(() => {
                    window.location.href = "https://YOUR-GIFT-LINK";
                }, 2500);
            };

            // button fade-in
            setTimeout(() => {
                btn.style.transition = "0.5s ease";
                btn.style.opacity = "1";
                btn.style.transform = "translateY(0)";
            }, 150);

        }, 50);

    }, 400);
}
