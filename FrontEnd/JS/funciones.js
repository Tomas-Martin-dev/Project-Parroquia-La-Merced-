import { form, inputTel, inputName, inputEmail, inputSubject, inputTextArea, botonSubmit, loader } from "./selectores.js";

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
    if (inputSubject.value.length < 5) {
        inputSubject.setCustomValidity("Caracteres mínimos: 5");
        inputSubject.reportValidity();
        return false;
    } else {
        inputSubject.setCustomValidity("");
        inputSubject.reportValidity();
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

export async function validarForm(e) {
    e.preventDefault();
    botonSubmit.blur();

    // Validando length de asunto, tel y mensaje
    if (!validarTel() || !validarAsunto()) {
        return;
    }

    loader.classList.add("loader-visiibility");

    let data = {
        name: inputName.value,
        emailPerson: inputEmail.value,
        subject: inputSubject.value,
        phone: inputTel.value,
        message: inputTextArea.value,
    };

    try {
        const response = await fetch("http://localhost:3000/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        setTimeout(() => {
            loader.classList.remove("loader-visiibility");
            alert(result.message);
            if (response.ok) {
                form.reset()
            }
        }, 3000);
    } catch (error) {
        console.error("Error en el envío del correo:", error);
        loader.classList.remove("loader-visiibility");
        alert("Hubo un error al enviar el correo. Revisa la consola para más detalles.");
    }
}

