const questMembers = document.getElementById("members-q")
const questUpload = document.getElementById("upload-q")
const questPassword = document.getElementById("password-q")
const questSubscript = document.getElementById("subscript-q")
const questSupport = document.getElementById("support-q")
const answerMembers = document.getElementById("members-a")
const answerUpload = document.getElementById("upload-a")
const answerPassword = document.getElementById("password-a")
const answerSubscript = document.getElementById("subscript-a")
const answerSupport = document.getElementById("support-a")
let membersOpen = false;
let uploadOpen = false;
let passwordOpen = false;
let supportOpen = false;
let subscriptOpen = false;
function closeThem() {
    
}
// function openOne(status,q) {
//      if (status == true) {
//         status = false;
//         console.log(q)
//         q+.classList.add("showHide")
//     } else {
//     status = true
//     closeThem()
//     answerMembers.classList.remove("showHide")
           
//     }
// }
questMembers.addEventListener("click", () => {
    if (membersOpen == true) {
            membersOpen = false;
            uploadOpen = false;
            passwordOpen = false;
            subscriptOpen = false;
            supportOpen = false;
        answerMembers.classList.add("showHide")
    } else {
         membersOpen = false;
        uploadOpen = false;
        passwordOpen = false;
        supportOpen = false;
        subscriptOpen = false;
    membersOpen = true
     answerMembers.classList.add("showHide")
        questMembers.children[0].style.fontWeight = "400"
        questMembers.children[1].style.transform = 'unset'
    answerPassword.classList.add("showHide")
        questPassword.children[0].style.fontWeight = "400"
        questPassword.children[1].style.transform = 'unset'
    answerSupport.classList.add("showHide")
        questSupport.children[0].style.fontWeight = "400"
        questSupport.children[1].style.transform = 'unset'
    answerUpload.classList.add("showHide")
        questUpload.children[0].style.fontWeight = "400"
        questUpload.children[1].style.transform = 'unset'
    answerSubscript.classList.add("showHide")
        questSubscript.children[0].style.fontWeight = "400"
        questSubscript.children[1].style.transform = 'unset'
    answerMembers.classList.remove("showHide")
           
    }
     if (questMembers.children[0].style.fontWeight == "700")
            {
            questMembers.children[0].style.fontWeight = "400"
            questMembers.children[1].style.transform = 'unset'
        } else {
            questMembers.children[0].style.fontWeight = "700";
            questMembers.children[1].style.transform = 'rotate(180deg)'
        }   
 
})

questUpload.addEventListener("click", () => {
     if (uploadOpen == true) {
        membersOpen = false;
        uploadOpen = false;
        passwordOpen = false;
        supportOpen = false;
        subscriptOpen = false;
        answerUpload.classList.add("showHide")
    } else {
         membersOpen = false;
        uploadOpen = false;
        passwordOpen = false;
        supportOpen = false;
        subscriptOpen = false;
    uploadOpen = true
     answerMembers.classList.add("showHide")
        questMembers.children[0].style.fontWeight = "400"
        questMembers.children[1].style.transform = 'unset'
    answerPassword.classList.add("showHide")
        questPassword.children[0].style.fontWeight = "400"
        questPassword.children[1].style.transform = 'unset'
    answerSupport.classList.add("showHide")
        questSupport.children[0].style.fontWeight = "400"
        questSupport.children[1].style.transform = 'unset'
    answerUpload.classList.add("showHide")
        questUpload.children[0].style.fontWeight = "400"
        questUpload.children[1].style.transform = 'unset'
    answerSubscript.classList.add("showHide")
        questSubscript.children[0].style.fontWeight = "400"
        questSubscript.children[1].style.transform = 'unset'
    answerUpload.classList.remove("showHide")
           
    }
    if (questUpload.children[0].style.fontWeight == "700")
 {
     questUpload.children[0].style.fontWeight = "400"
     questUpload.children[1].style.transform = 'unset'
 } else {
     questUpload.children[0].style.fontWeight = "700";
     questUpload.children[1].style.transform = 'rotate(180deg)'
 }   
})
questPassword.addEventListener("click", () => {
     if (passwordOpen== true) {
        membersOpen = false;
        uploadOpen = false;
        passwordOpen = false;
        supportOpen = false;
        subscriptOpen = false;
        answerPassword.classList.add("showHide")
    } else {
         membersOpen = false;
        uploadOpen = false;
        passwordOpen = false;
        supportOpen = false;
        subscriptOpen = false;
    passwordOpen = true
     answerMembers.classList.add("showHide")
        questMembers.children[0].style.fontWeight = "400"
        questMembers.children[1].style.transform = 'unset'
    answerPassword.classList.add("showHide")
        questPassword.children[0].style.fontWeight = "400"
        questPassword.children[1].style.transform = 'unset'
    answerSupport.classList.add("showHide")
        questSupport.children[0].style.fontWeight = "400"
        questSupport.children[1].style.transform = 'unset'
    answerUpload.classList.add("showHide")
        questUpload.children[0].style.fontWeight = "400"
        questUpload.children[1].style.transform = 'unset'
    answerSubscript.classList.add("showHide")
        questSubscript.children[0].style.fontWeight = "400"
        questSubscript.children[1].style.transform = 'unset'
    answerPassword.classList.remove("showHide")
           
    }
    if (questPassword.children[0].style.fontWeight == "700")
 {
     questPassword.children[0].style.fontWeight = "400"
     questPassword.children[1].style.transform = 'unset'
 } else {
     questPassword.children[0].style.fontWeight = "700";
     questPassword.children[1].style.transform = 'rotate(180deg)'
 }   
})
questSubscript.addEventListener("click", () => {
     if (subscriptOpen == true) {
        membersOpen = false;
        uploadOpen = false;
        passwordOpen = false;
        supportOpen = false;
        subscriptOpen = false;
        answerSubscript.classList.add("showHide")
    } else {
         membersOpen = false;
        uploadOpen = false;
        passwordOpen = false;
        supportOpen = false;
        subscriptOpen = false;
    subscriptOpen = true
     answerMembers.classList.add("showHide")
        questMembers.children[0].style.fontWeight = "400"
        questMembers.children[1].style.transform = 'unset'
    answerPassword.classList.add("showHide")
        questPassword.children[0].style.fontWeight = "400"
        questPassword.children[1].style.transform = 'unset'
    answerSupport.classList.add("showHide")
        questSupport.children[0].style.fontWeight = "400"
        questSupport.children[1].style.transform = 'unset'
    answerUpload.classList.add("showHide")
        questUpload.children[0].style.fontWeight = "400"
        questUpload.children[1].style.transform = 'unset'
    answerSubscript.classList.add("showHide")
        questSubscript.children[0].style.fontWeight = "400"
        questSubscript.children[1].style.transform = 'unset'
    answerSubscript.classList.remove("showHide")
           
    }
    if (questSubscript.children[0].style.fontWeight == "700")
 {
     questSubscript.children[0].style.fontWeight = "400"
     questSubscript.children[1].style.transform = 'unset'
 } else {
     questSubscript.children[0].style.fontWeight = "700";
     questSubscript.children[1].style.transform = 'rotate(180deg)'
 }   
})
questSupport.addEventListener("click", () => {
     if (supportOpen == true) {
        membersOpen = false;
        uploadOpen = false;
        passwordOpen = false;
        supportOpen = false;
        subscriptOpen = false;
        answerSupport.classList.add("showHide")
    } else {
         membersOpen = false;
        uploadOpen = false;
        passwordOpen = false;
        supportOpen = false;
        subscriptOpen = false;
    supportOpen = true
     answerMembers.classList.add("showHide")
        questMembers.children[0].style.fontWeight = "400"
        questMembers.children[1].style.transform = 'unset'
    answerPassword.classList.add("showHide")
        questPassword.children[0].style.fontWeight = "400"
        questPassword.children[1].style.transform = 'unset'
    answerSupport.classList.add("showHide")
        questSupport.children[0].style.fontWeight = "400"
        questSupport.children[1].style.transform = 'unset'
    answerUpload.classList.add("showHide")
        questUpload.children[0].style.fontWeight = "400"
        questUpload.children[1].style.transform = 'unset'
    answerSubscript.classList.add("showHide")
        questSubscript.children[0].style.fontWeight = "400"
        questSubscript.children[1].style.transform = 'unset'
    answerSupport.classList.remove("showHide")
           
    }
    if (questSupport.children[0].style.fontWeight == "700")
 {
     questSupport.children[0].style.fontWeight = "400"
     questSupport.children[1].style.transform = 'unset'
 } else {
     questSupport.children[0].style.fontWeight = "700";
     questSupport.children[1].style.transform = 'rotate(180deg)'
 }   
})