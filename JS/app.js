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
    let boxContainer = obj.parentElement;
    let boxContainerAuto = document.querySelectorAll(".height-auto");    
    
    // si uno de los container-info esta visible y el container-info que clikeo no lo esta... oculto el que esta visible
    containersInfo.forEach(div => {
    if (div.classList.contains("info-visibility") && !containerInfoActual.classList.contains("info-visibility")) {
        div.classList.toggle("info-visibility");
        div.previousElementSibling.classList.toggle("arrow-box__click");
    }});
    // alterno class al container-info de informacion
    containerInfoActual.classList.toggle("info-visibility");
    // alterno class al arrow
    obj.classList.toggle("arrow-box__click");
    
    // si uno de los boxs esta expandido y el que yo clikeo no... oculto el que esta expandido
    boxContainerAuto.forEach( box =>{
        if (box.classList.contains("height-auto") && !boxContainer.classList.contains("height-auto")) {
            box.classList.toggle("height-auto")
        }
    });
    // alterno la class para dar animacion al heigth
    boxContainer.classList.toggle("height-auto");
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Activar la animación cuando el enlace sea visible
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.5 }); // 50% del elemento visible para activar

  // Seleccionar el enlace
  const link = document.querySelectorAll('.info-anim');
  link.forEach( e =>{
      observer.observe(e); // Iniciar la observación del enlace
  })