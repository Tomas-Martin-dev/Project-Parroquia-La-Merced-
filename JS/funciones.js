import { form, inputTel, loader, inputAffair, inputTextArea, botonSubmit } from "./selectores.js";

export function validarTel() {
    if (inputTel.value.length < 10) {
        inputTel.setCustomValidity("Caracteres mínimos: 10");
        inputTel.reportValidity(); 
        return false;
    } else {
        inputTel.setCustomValidity("");
        inputTel.reportValidity(); 
        return true;
    }
}

export function validarAsunto() {
    if (inputAffair.value.length < 5) {
        inputAffair.setCustomValidity("Caracteres mínimos: 5");
        inputAffair.reportValidity(); 
        return false;
    } else {
        inputAffair.setCustomValidity("");
        inputAffair.reportValidity(); 
        return true;
    }
}

export function validarMensaje() {
    if (inputTextArea.value.length < 5) {
        inputTextArea.setCustomValidity("Caracteres mínimos: 10");
        inputTextArea.reportValidity(); 
        return false;
    } else {
        inputTextArea.setCustomValidity("");
        inputTextArea.reportValidity(); 
        return true;
    }
}

export function validarForm(e){
    e.preventDefault();
    botonSubmit.blur()
    // Validando lenght de asunto, tel y mensaje
    if(!validarTel() || !validarAsunto()){
        return
    }

    // Todo validado!!!
    loader.classList.add("loader-visiibility");
    setTimeout(() => {
        loader.classList.remove("loader-visiibility");
        alert("Email Enviado");
        form.reset()
    }, 3000);
    
}       

