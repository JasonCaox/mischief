const randomFact = document.getElementById('randomFact');

const funnyFacts = [
    "💘 相亲次数：404 Not Found",
    "💍 脱单预警：遥遥无期",
    "💝 择偶标准：有手有脚会喘气",
    "💑 恋爱经验：仅限游戏情缘",
    "👫 前女友数量：-1",
    "💌 表白成功率：0.00001%",
    "💕 约会地点：网吧优先",
    "💖 结婚预算：充游戏剩下的钱",
    "👰 梦中情人：二次元老婆",
    "💐 最浪漫的事：一起开黑坑队友"
];

function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * funnyFacts.length);
    randomFact.textContent = funnyFacts[randomIndex];
}

setInterval(showRandomFact, 3000);
showRandomFact(); 