const mode = document.getElementById("mode")
const cards = document.querySelectorAll(".card")
const body = document.body
const circle = document.getElementById("circle")
const modeText = document.getElementById("mode-selected")
let currentMode = false

mode.addEventListener("click" , ()=> {
   modeText.classList.remove("mode-text-white")
    cards.forEach((c) => {
        c.classList.toggle("lt")
        c.classList.toggle("dk")
        
    })
    modeText.classList.toggle("mode-text-lt")
    modeText.classList.toggle("mode-text-dk")
    circle.classList.toggle("circle-lt")
    circle.classList.toggle("circle-dk")
    mode.classList.toggle("left")
    mode.classList.toggle("left-back")
    mode.classList.toggle("right")
    body.classList.toggle("pagedk")
    currentMode = !currentMode
    
})

mode.addEventListener("mouseover" , () => {
     
    if (currentMode === false) {
        mode.classList.add("left-back")
    } else {
        mode.classList.remove("left-back")
        
        modeText.classList.add("mode-text-white")
        
    
    }
})

mode.addEventListener("mouseout" , () => {
 if (currentMode === false) {
        mode.classList.remove("left-back")
    } else {
        mode.classList.add("left-back")
        
        modeText.classList.remove("mode-text-white")
    }

})