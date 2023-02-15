const form = document.querySelector('form')
const email = document.getElementById('email')
const emailError = document.getElementById('emailError');

// the event lister help to collect inform from the inputer
email.addEventListener("input", (event) => {
    // each time the user type in something we check if the form fields are valid;
    if(email.validity.va =id){
        emailError.textContent =  " ";
    }else{
    //    if there is still display the error;
    showError();

    }
})
function showError(){
    // if email is empty
    if(email.validity.valuemissing){
        emailError.textContent = "please enter email address"
        // 
    }else if(email.validity.typemisMatch){
emailError.textContent = "enter a valid email address";
// email tooshort
    }else if(email.validity.tooshort){
        emailError.textContent = ' email should have atleast 5 character    ${email.length}';
    }
}