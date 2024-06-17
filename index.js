let fighters = [ "🦐","🦑","🦂","","🐙","🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩",
                 "🦭", "🦀", "🐝", "🦋","🐛","🐜","🐞","🕸️","🐷","🐑","🦏","🐁",
               "🦔","🐇", "🐼", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    
    let randomOne = Math.floor( Math.random() * fighters.length )
    let randomTwo = Math.floor( Math.random() * fighters.length )
    stageEl.textContent = fighters[randomOne] + " vs " + fighters[randomTwo]
})




