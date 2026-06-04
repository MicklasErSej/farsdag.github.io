const questions = [
    "Checkpoint 1: Ready for the bunker mission?",
    "Checkpoint 2: What was our funniest trip memory?",
    "Checkpoint 3: Who is the world's greatest dad?",
    "Checkpoint 4: Are you ready for your gift?"
];

let current = 0;

function nextQuestion(){

    current++;

    if(current < questions.length){

        document.getElementById("question")
        .innerHTML = questions[current];

        document.getElementById("answer").value = "";

        document.getElementById("bar")
        .style.width = (current/questions.length)*100 + "%";

    } else {

        document.querySelector(".mission-box").innerHTML = `
        <h2>🎉 MISSION COMPLETE 🎉</h2>

        <p style="margin-top:20px">
        Congratulations Agent Dad.
        The bunker investigation is complete.
        </p>

        <a href="https://YOUR-GIFT-LINK.com"
           target="_blank">
           <button style="margin-top:30px">
              Reveal Your Gift
           </button>
        </a>
        `;
    }
}
