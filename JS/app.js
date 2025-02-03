import { form, inputTel, inputAffair, inputTextArea } from "./selectores.js";
import { validarForm, validarTel, validarAsunto, validarMensaje } from "./funciones.js";


// eventos
form.addEventListener("submit", (e)=>{
    validarForm(e)
});

inputTel.addEventListener("input", () => {
    validarTel(); 
});

inputAffair.addEventListener("input", ()=>{ 
    validarAsunto()
})

inputTextArea.addEventListener("input", ()=>{ 
    validarMensaje()
})