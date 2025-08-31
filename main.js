let coin = 0;
const coinDisplay = document.getElementById('coin');
const playSlot = document.getElementById('playSlot');

function getRandomSymbol() {
    const symbols = ["🍒", "🍋", "🍉", "⭐", "7️⃣"];
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function play() {
    const result = [getRandomSymbol(), getRandomSymbol(), getRandomSymbol()];
    alert("🎰 Sonuç: " + result.join(" | "));
    if (result[0] === result[1] && result[1] === result[2]) {
        coin += 50; // Jackpot
        alert("Jackpot! 50 coin kazandın 🎉");
    } else if (result[0] === result[1] || result[1] === result[2] || result[0] === result[2]) {
        coin += 20; // Eşleşme
        alert("Tebrikler! 20 coin kazandın 🎉");
    } else {
        alert("Kaybettin 😢");
    }
    coinDisplay.textContent = coin;
}

playSlot.addEventListener('click', play);