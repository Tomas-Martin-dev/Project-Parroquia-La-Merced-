console.log("js conectado");

function scrollDown() {
    const sectionNovedades = document.querySelector(".container-section__novedades")
    let disntacia = sectionNovedades.offsetTop;
    window.scrollBy({
        top: disntacia -10 , // Desplazarse 100px hacia abajo
        behavior: 'smooth' // Hacer que el desplazamiento sea suave
    });
}

function activarInfo(obj) {
    
    // alterno class al container de informacion
    const infoTarjeta = document.querySelector("#info-tarjeta");
    infoTarjeta.classList.toggle("info-vissibility")

    // alterno class al arrow
    obj.classList.toggle("arrow-box__click")
}
