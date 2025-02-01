console.log("js conectado - fucniones");

const form = document.querySelector("form").addEventListener("submit", validarForm);

function validarForm(e){
    e.preventDefault();
    const inputEmail = e.target.firstElementChild.firstElementChild.value.trim(); 
    const inputTel = e.target.firstElementChild.lastElementChild.value; 
    const inputName = e.target.childNodes[3].firstElementChild.value.trim(); 
    const inputAffair = e.target.childNodes[3].lastElementChild.value.trim(); 
    const inputTextArea = e.target.childNodes[5].value.trim(); 
    const loader = document.querySelector(".loader");
    
    // Validacion de Email
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!regex.test(inputEmail)) {
        alert("Formato de email inválido");
        return;
    }else{
        loader.classList.add("loader-visiibility");
        setTimeout(() => {
            loader.classList.remove("loader-visiibility");
            alert("Email Enviado",inputEmail,inputAffair, inputName, inputTel, inputTextArea);
        }, 3000);
    }
    
}

