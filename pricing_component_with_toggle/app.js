const timeLength = document.getElementById("switch");
const price = document.querySelectorAll(".price > p > span")

timeLength.addEventListener("click", () => {
   console.log(price)
   timeLength.classList.toggle("switch-on")
   timeLength.classList.toggle("switch-off")
   price.forEach( (p) => p.classList.toggle("nine"))
})


