const message = document.querySelector("#besked");
const form1 = document.querySelector("#form");

function validate(form){
    //if name is empty
    if(form.navn.value == "") {
        message.innerHTML = "Angiv navn";
        form.navn.focus();
        return false; //the form is not 'sent'
    }

    //if age is empty
    if(form.alder.value == "") {
        message.innerHTML = "Angiv alder";
        form.alder.focus();
        return false;
    }
    
    //if age is not a number
    if(isNaN(form.alder.value)) {
        message.innerHTML = "Angiv alder med tal";
        form.alder.focus();
        return false;
    }

    //if age is under 18 (illegal)
    if(form.alder.value < 18) {
        message.innerHTML = "Du skal være mindst 18 år";
        form.alder.focus();
        return false;
    }

    //if email does not match regex (anything@anything.co [all 'anythings' must be at least one letter long, and last part 'co' must be at least two letters long])
    if(/.+@.+\.\w\w+/.test(form.email1.value) == false) {
        message.innerHTML = "Angiv en gyldig email-adresse";
        form.email1.focus();
        return false;
    }

    //if emails do not match
    if(form.email2.value != form.email1.value) {
        message.innerHTML = "Email-adresserne skal være ens";
        form.email2.focus();
        return false;
    }

    return true; //form continues to send
}