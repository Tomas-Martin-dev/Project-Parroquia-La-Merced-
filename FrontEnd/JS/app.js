import { form, inputTel, inputSubject, inputTextArea } from "./selectores.js";

import { validarForm, validarTel, validarAsunto, validarMensaje, llamadoNewCMS, llamadoHourCMS } from "./funciones.js";


// eventos
form?.addEventListener("submit", (e)=>{
    validarForm(e)
});

inputTel?.addEventListener("input", () => {
    validarTel(); 
});

inputSubject?.addEventListener("input", ()=>{ 
    validarAsunto()
})

inputTextArea?.addEventListener("input", ()=>{ 
    validarMensaje()
})

try {
    await Promise.all([llamadoNewCMS(),llamadoHourCMS()]);
} catch (error) {
    console.log(error);
}