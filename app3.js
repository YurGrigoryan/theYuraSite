let blueCar = document.getElementById("bluecar")
let raceCar = document.getElementById("racecar")
let result = document.getElementById("result")
let score = document.getElementById("score")
let game = document.getElementById("game2")
let i = 0

blueCar.addEventListener("animationiteration" , function(){
    let random = ((Math.floor(Math.random() *3))*130)
    blueCar.style.left = `${random}px`
    i++
})
window.addEventListener("keydown" , function(e) {
    if (e.keyCode == "39") {
        let raceCarLeft = parseInt(this.window.getComputedStyle(raceCar).getPropertyValue("left"))
        if(raceCarLeft < 260){
        raceCar.style.left = `${raceCarLeft + 130}px`
    }}
    if (e.keyCode == "37") {
        let raceCarLeft = parseInt(this.window.getComputedStyle(raceCar).getPropertyValue("left"))
        if(raceCarLeft > 0){
        raceCar.style.left = `${raceCarLeft - 130}px`
    }}
})
setInterval(function GameOver() {
    let blueCarTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"))
    let blueCarLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"))
    let raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"))
    if ((blueCarLeft === raceCarLeft) && (blueCarTop > 250) && (blueCarTop < 450)) {
        result.style.display = "block"
        game.style.display = "none"
        score.innerText = `score :${i} `
        i = 0
    }
}, 10)