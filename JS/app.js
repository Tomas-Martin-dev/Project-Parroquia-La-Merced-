console.log("js conectado");

function scrollDown() {
    const sectionNovedades = document.querySelector(".container-section__novedades")
    let disntacia = sectionNovedades.offsetTop;
    window.scrollBy({
        top: disntacia -10 , // Desplazarse 100px hacia abajo
        behavior: 'smooth' // Hacer que el desplazamiento sea suave
    });
}
