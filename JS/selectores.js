
// Selectores Formulario
const form = document.querySelector("form");

const inputEmail = form.firstElementChild.firstElementChild; 

const inputTel = form.firstElementChild.lastElementChild; 

const inputName = form.childNodes[3].firstElementChild; 

const inputAffair = form.childNodes[3].lastElementChild; 

const inputTextArea = form.childNodes[5];

const botonSubmit = form.lastElementChild;

const loader = document.querySelector(".loader");

// console.log(form,inputEmail);
export {
    form,
    inputEmail,
    inputTel, 
    inputName,
    inputAffair,
    inputTextArea,
    loader, 
    botonSubmit
}