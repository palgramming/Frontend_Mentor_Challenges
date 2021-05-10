const form = document.getElementById("form");
const email = document.getElementById('email');
const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (email.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        email.style.border = "";
        error.classList.add("none");
           alert(`Congrats had this been a real "Email Submission" you would have submitted a valid email address "${email.value}"`);
           email.value = "";
    } else {
         email.style.border = "1px solid #FF5466";
         error.classList.remove("none");
         email.value = "";
         email.placeholder = "example@email/com";
    };
   
    
});
