const email = document.getElementById("email")
const submit = document.getElementById("submit")
const form = document.getElementById("form")
const error = document.getElementById("error")


email.addEventListener("focusin", () => {
    email.placeholder = "john@mail.com"
})

email.addEventListener("focusout", () => {
    email.placeholder = "Email address"
})




form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)){
         error.classList.add("none")
    alert(`Congrats! you would have submitted "${email.value}"`)
    email.value =""
    email.placeholder = "Email address"
  } else {
    error.classList.remove("none")
}

})

