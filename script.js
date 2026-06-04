const questions = [

{
q:"How prepared are you for today's mission?",
a:[
"Very prepared",
"Moderately prepared",
"I forgot why I'm here"
]
},

{
q:"Choose a trusted companion:",
a:[
"A Viking",
"A Golden Retriever",
"Three raccoons"
]
},

{
q:"Which superpower is most useful?",
a:[
"Flying",
"Mind reading",
"Unlimited snacks"
]
},

{
q:"What is your current energy level?",
a:[
"100%",
"Coffee required",
"Please reboot"
]
},

{
q:"Which button would you press?",
a:[
"The safe one",
"The shiny one",
"The suspicious one"
]
},

{
q:"Choose a vehicle:",
a:[
"Tank",
"Bicycle",
"Shopping cart"
]
},

{
q:"What is the secret ingredient?",
a:[
"Luck",
"Cake",
"Mystery"
]
},

{
q:"Final question. Ready for your gift?",
a:[
"Yes",
"Absolutely",
"Definitely"
]
}

];

let current = -1;

const content = document.getElementById("content");

document.getElementById("total").innerText =
questions.length;

function startMission(){
    current = 0;
    showQuestion();
}

function showQuestion(){

    updateProgress();

    const q = questions[current];

    content.classList.add("fade-out");

    setTimeout(()=>{

        let html = `
        <div class="question">
            ${q.q}
        </div>
        `;

        q.a.forEach(answer=>{
            html += `
            <button
            class="answer-btn"
            onclick="nextQuestion()">
            ${answer}
            </button>
            `;
        });

        content.innerHTML = html;

        content.classList.remove("fade-out");

    },300);
}

function nextQuestion(){

    current++;

    if(current >= questions.length){
        revealGift();
        return;
    }

    showQuestion();
}

function updateProgress(){

    document.getElementById("current").innerText =
    current + 1;

    const percent =
    ((current) / questions.length) * 100;

    document.getElementById("progress-fill")
    .style.width = percent + "%";
}

function revealGift(){

    document.body.innerHTML = `
    <div class="cinema">
        <div class="noise"></div>

        <div class="center">
            <div id="glitchText">PROCESSING RESULTS</div>
        </div>

        <div id="subText"></div>
    </div>
    `;

    setTimeout(() => {
        document.getElementById("glitchText").innerText = "VERIFYING DAD STATUS";
    }, 1500);

    setTimeout(() => {
        document.getElementById("glitchText").innerText = "ACCESSING FINAL FILE";
    }, 3000);

    setTimeout(() => {
        typeReveal();
    }, 4500);
}
