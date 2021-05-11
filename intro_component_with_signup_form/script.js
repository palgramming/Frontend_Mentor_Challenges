const firstError = document.getElementById("first-error")
const lastError = document.getElementById("last-error")
const emailError = document.getElementById("email-error")
const passwordError = document.getElementById("password-error")
const form = document.getElementById("form")
const email = document.getElementById("email")
const inputs = Array.from(document.getElementsByTagName("input"))

const firstTE = document.getElementById("first-text-error");
const lastTE = document.getElementById("last-text-error");
const emailTE = document.getElementById("email-text-error");
const passwordTE = document.getElementById("password-text-error");


form.addEventListener("submit" , (e) => {
    e.preventDefault();
    let errorCount = 0;
    if (inputs[0].value.length < 1) {
         firstTE.classList.remove("error");
    firstError.classList.remove("error");
    errorCount +=1
    } else {
firstTE.classList.add("error");
    firstError.classList.add("error");
    }
   if (inputs[1].value.length < 1) {
        lastTE.classList.remove("error");
         lastError.classList.remove("error");
         errorCount +=1
    } else {
            lastTE.classList.add("error");
         lastError.classList.add("error");
    }
    if (!inputs[2].value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailTE.classList.remove("error");
        emailError.classList.remove("error");
        inputs[2].value = ""
        inputs[2].placeholder = "email@example/com"
        errorCount +=1
    } else {
        emailTE.classList.add("error");
        emailError.classList.add("error");
    }
   
     if (inputs[3].value.length < 1) {
        passwordTE.classList.remove("error");
        passwordError.classList.remove("error");
        errorCount +=1
    } else {
        passwordTE.classList.add("error");
        passwordError.classList.add("error")
    }
   

  
    if (errorCount == 0) {
        alert(`Congrats your submission was accepted
        name: ${inputs[0].value} ${inputs[1].value}
        email: ${inputs[2].value}
        password: ***hidden***`)

        inputs.forEach((e) => e.value = "" )
        
    }
    
   
    
})





