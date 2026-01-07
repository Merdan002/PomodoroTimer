 let workTime = 1 * 60;   // 25 dakika
let breakTime = 5 * 60;  // 5 dakika
let time = workTime;

let isRunning = false;
let isWork = true;
let timerInterval;

const timerDisplay = document.getElementById("timer");
const modeText = document.getElementById("mode");
const messageText = document.getElementById("message");
const quoteText = document.getElementById("quote");

const quotes = [
    "Başlamak işin yarısıdır.",
    "Az ama sürekli çalış.",
    "Bugün zor, yarın rahat.",
    "Disiplin motivasyondan üstündür.",
    "Küçük adımlar büyük sonuçlar getirir.",
    "Odaklan ve vazgeçme."
];

function updateDisplay() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    timerDisplay.textContent =
        `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function showMessage() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteText.textContent = `"${randomQuote}"`;

    if (isWork) {
        messageText.textContent = "🟢 Mola zamanı! Dinlenebilirsin.";
        modeText.textContent = "Mola Zamanı";
    } else {
        messageText.textContent = "🔵 Çalışma zamanı! Odaklan.";
        modeText.textContent = "Çalışma Zamanı";
    }
}

function startTimer() {
    if (isRunning) return;

    messageText.textContent = "";
    quoteText.textContent = "";

    isRunning = true;
    timerInterval = setInterval(() => {
        time--;

        if (time < 0) {
            clearInterval(timerInterval);
            isRunning = false;

            showMessage();

            if (isWork) {
                time = breakTime;
            } else {
                time = workTime;
            }
            isWork = !isWork;
            updateDisplay();
        } else {
            updateDisplay();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    isWork = true;
    time = workTime;

    modeText.textContent = "Çalışma Zamanı";
    messageText.textContent = "";
    quoteText.textContent = "";

    updateDisplay();
}

updateDisplay();
