const pianoKeys = document.querySelectorAll(".key")

let playSound = (newUrl) => {
    
    new Audio(newUrl).play()
}



pianoKeys.forEach((pianoKey, i) => {
    const number = i < 9 ? '0' + (i + 1) : (i + 1)
    const newUrl = `sounds/key${number}.mp3`
    
    pianoKey.addEventListener('click', () => playSound(newUrl))
})