const questions = [
{
    q: "Hvorfor fejrer man fars dag?",
    a: ["For at vise dig taknemmelighed og påskønne dig", "Fordi det gør man i Danmark på grundlovsdag", "For at fejre fædre og deres betydning for familien"]
},
{
    q: "Hvor stammer fars dag fra?",
    a: ["Danmark", "USA", "Tyskland"]
},
{
    q: "Hvorfor hedder det grundlovsdag?",
    a: ["Er Danmarks nationaldag, som blev indført af Gunnar", "Grundloven blev underskrevet", "Danmarks grundlov blev vedtaget"]
},
{
    q: "Hvilket år blev Danmarks Grundlov vedtaget og underskrevet?",
    a: ["5. juni 1849", "5. juni 1920", "5. juni 1947"]
},
{
    q: "Er Danmark mest dækket af skov, marker eller vand set oppefra ?",
    a: ["Skov", "Marker", "Vand"]
},
{
    q: "Da grundloven blev skrevet under i 1849, var der også?",
    a: ["Treårskrigen", "Hedebølge over Danmark", "Den kolde krig"]
},
{
    q: "Hvad vil du stå bedst fast i, hvis vejret er lidt ustadigt ?",
    a: ["Sikkerhedssko", "Skechers sko", "Yeezy Slides"]
},
{
    q: "Hvad holder bedst på varmen - samme temp hele året",
    a: ["70 meter under jorden", "300 - 500 meter over jorden", "begge steder holder samme temptratur"]
},
{
    q: "Hvis du skal befinde dig i menneskeskabt konstruktion, vil du så helst i ?",
    a: ["En ting af flet", "En ting af plastik", "En ting af beton"]
},
{
    q: "Du skal med os på en oplevelse, hvis du bliver bange, vil du så…",
    a: ["Nægte at tage med", "Passe på os, selvom du er bange", "Tænke det har jeg aldrig prøvet før, det bliver fedt"]
},
{
    q: "Hvad er det vigtigste for dig, hvis panikken kommer…",
    a: ["Luft", "Historie", "Sikkerhed"]
},
{
    q: "Hvad vil du helst undgå ?",
    a: ["Dårlig luft", "Regnvejr", "Kø"]
},
{
    q: "Hvad ville være et problem, hvis du oplever noget der ikke fungerede ?",
    a: ["Ventilationen", "Belysningen", "Parkeringen"]
},
{
    q: "Hvordan ser du dig selv som far ?",
    a: ["Kærlig og omsorgsfuld", "forstående og gavmild", "Som verdens bedste far"]
},
{
    q: "Hvad er det vigtigste for menneske at have adgang til ?",
    a: ["Luft", "Chokolade", "Wifi"]
},
{
    q: "Hvad ville du kigge mest efter på en klar dag ?",
    a: ["Horisonten", "Himlen", "Jorden"]
},
{
    q: "Hvilket af disse ord forbinder mest med hemmeligholdelse ?",
    a: ["Offentlig", "Hemmelig", "Synlig"]
},
{
    q: "Hvad ville du far kigge mest efter, hvis du havde en fantastisk udsigt?",
    a: ["Landskabet", "Hvor bilen holder", "Mobilen"]
},
{
    q: "Hvad er det vigtigste i et lukket rum over længere tid ?",
    a: ["Musik", "Sollys", "Frisk luft"]
},
{
    q: "Glædelig Farsdag, Vi elsker dig!",
    a: ["Vidre til Gaven"]
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
        <h2>Spørgsmål ${current + 1}</h2>

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
        <h2>Du klaret den. 🎉</h2>

        <p style="margin-top:10px;">
            Din gave er klar!.
        </p>

        <button id="giftBtn">Åben Gaven</button>
    `;

    document.getElementById("giftBtn").onclick = () => {

        document.body.innerHTML = `
            <div class="bridge">
                <div class="message">
                    <h1>Håber du bliver glad!</h1>
                    <p>Verdens Bedste Far!</p>
                </div>
            </div>
        `;

        setTimeout(() => {
            window.location.href = "https://nordjyskemuseer.dk/u/regan-vest/";
        }, 2500);
    };
}
