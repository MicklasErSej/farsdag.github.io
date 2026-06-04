const questions = [
"How prepared are you?",
"Choose your companion",
"Pick a superpower",
"Energy level check",
"Choose wisely",
"Final readiness check"
];

let current = -1;

const content = document.getElementById("content");

document.getElementById("total").innerText = questions.length;

document.getElementById("startBtn").addEventListener("click", startMission);

function startMission(){
    current = 0;
    showQuestion();
}

function showQuestion(){

    document.getElementById("current").innerText = current + 1;

    document.getElementById("progress-fill").style.width =
        (current / questions.length) * 100 + "%";

    content.innerHTML = `
        <h2 style="margin-bottom:20px">${questions[current]}</h2>

        <button onclick="next()">Option A</button>
        <button onclick="next()">Option B</button>
        <button onclick="next()">Option C</button>
    `;
}

function next(){
    current++;

    if(current >= questions.length){
        finish(); // 🔥 IMPORTANT CONNECTION
        return;
    }

    showQuestion();
}

/* =========================
   🎬 CINEMATIC ENDING
========================= */

function finish(){

    document.body.innerHTML = `
    <div class="cinema">
        <div class="noise"></div>

        <div id="glitchText">PROCESSING RESULTS</div>
        <div id="subText"></div>
    </div>
    `;

    setTimeout(() => {
        document.getElementById("glitchText").innerText =
        "VERIFYING DAD STATUS";
    }, 1500);

    setTimeout(() => {
        document.getElementById("glitchText").innerText =
        "ACCESSING FINAL FILE";
    }, 3000);

    setTimeout(() => {
        typeReveal();
    }, 4500);
}

function typeReveal(){

    const text = `
ACCESS GRANTED

Dad Status: LEGENDARY
Mission Complete

Your birthday gift is ready.

Prepare for real-world surprise...
`;

    let i = 0;

    const interval = setInterval(() => {

        document.getElementById("subText").innerText =
        text.slice(0, i);

        i++;

        if(i > text.length){
            clearInterval(interval);
            showFinalButton();
        }

    }, 25);
}

function showFinalButton(){

    const btn = document.createElement("button");

    btn.innerText = "OPEN GIFT";

    btn.style.marginTop = "30px";
    btn.style.padding = "15px";
    btn.style.width = "80%";
    btn.style.border = "none";
    btn.style.borderRadius = "12px";
    btn.style.cursor = "pointer";
    btn.style.fontWeight = "bold";

    btn.onclick = () => {
        document.body.innerHTML = `
        <div class="finalReveal">
            <h1>🏰 SURPRISE UNLOCKED</h1>
            <p>Your real birthday gift is ready 🎉</p>

            <button onclick="window.location.href='YOUR-GIFT-LINK'">
                Go to Gift
            </button>
        </div>
        `;
    };

    document.querySelector(".cinema").appendChild(btn);
}
