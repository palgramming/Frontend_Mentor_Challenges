const pre = document.getElementById("pre");
const next = document.getElementById("next");
const john = document.getElementById("john");
const tayna = document.getElementById("tanya");
const one = document.getElementById("quote-two");
const two = document.getElementById("quote-one");

pre.addEventListener("click", () => {
  
    john.classList.toggle("none")
    tanya.classList.toggle("none")
    one.classList.toggle("none")
    two.classList.toggle("none")
})

next.addEventListener("click", () => {
    
    john.classList.toggle("none")
    tanya.classList.toggle("none")
    one.classList.toggle("none")
    two.classList.toggle("none")
})