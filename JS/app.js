console.log("js conectado");
const infoTarjeta = document.querySelector("#info-tarjeta");
function scrollDown() {
    const sectionNovedades = document.querySelector(".container-section__novedades")
    let disntacia = sectionNovedades.offsetTop;
    window.scrollBy({
        top: disntacia - 10, // Desplazarse 100px hacia abajo
        behavior: 'smooth' // Hacer que el desplazamiento sea suave
    });
}

function activarInfo(obj) {
    let containersInfo = document.querySelectorAll("#container-info");
    let containerInfoActual = obj.nextElementSibling;
    
    // si uno de los container-info esta visible y el container-info que clikeo no lo esta... oculto el que esta visible
    containersInfo.forEach((div) => {
    if (div.classList.contains("info-vissibility") && !containerInfoActual.classList.contains("info-vissibility")) {
        div.classList.toggle("info-vissibility");
        div.previousElementSibling.classList.toggle("arrow-box__click");
    }})
    
    // alterno class al container-info de informacion
    containerInfoActual.classList.toggle("info-vissibility");
    // alterno class al arrow
    obj.classList.toggle("arrow-box__click");
    
}
