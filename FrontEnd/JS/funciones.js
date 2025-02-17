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

export async function llamadoCMS() {
    const url = "http://localhost:1337/api/news?populate=imagen";
    try {
        const res = await fetch(url);
        const data = await res.json();
        crearNew(data.data)
    } catch (error) {
        console.log(error);
    }
}

export function crearNew(array) {
    const contenedprNew = document.querySelector(".content-art__novedades");
    console.log(array);
    
    array.forEach(e => {
        const { fecha, id, imagen:{formats, url, name}, informacion, titulo } = e;
        // creo la new
        let article = document.createElement("article");
        article.classList.add("art-novedades");
        
        let img = document.createElement("img");
        img.src = `${url}`;
        img.alt = `${name}`;
        img.loading = "eager"

        let div = document.createElement("div");
        div.classList.add("container-text");

        let pFecha = document.createElement("p");
        pFecha.classList.add("fecha");
        pFecha.textContent = `${fecha}`;

        let h3 = document.createElement("h3");
        h3.textContent = `${titulo}`

        let pResumen = document.createElement("p");
        pResumen.classList.add("resumen");
        pResumen.textContent = `${informacion}`;

        let enlace = document.createElement("a");
        enlace.href = "noticias.html";
        enlace.rel = "noopener noreferrer";
        enlace.classList.add("btn","LeerMas");
        enlace.textContent = "Leer Mas";

        div.appendChild(pFecha);
        div.appendChild(h3);
        div.appendChild(pResumen);
        div.appendChild(enlace);
        article.appendChild(img);
        article.appendChild(div);
        contenedprNew.appendChild(article);
        console.log(article);
        
    });
    
}