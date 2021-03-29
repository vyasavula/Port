const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')
const textEl = document.getElementById('dev-text')
const text = "Full Stack Developer...."
let speed = 150
let idx = 1
writeText()
function writeText() {
    textEl.innerHTML = text.slice(0, idx)
    idx++
if (idx > text.length){
    idx = 1
}
setTimeout(writeText, speed)
}



function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)
