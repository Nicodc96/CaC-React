const $imgBatman = document.querySelector("#imgBatman");
const $btnToggle = document.querySelector("#botonToggle");
const $textoAyuda = document.querySelector(".texto-ayuda");
const audioOn = new Audio("./sound/batiEncendido.mp3");
const audioOff = new Audio("./sound/batiClick.mp3");
const rutaImgBatmanOn = "./img/batmanON.gif";
const rutaImgBatmanOff = "./img/batmanOFF.jpg";

audioOn.volume = 0.30;
audioOff.volume = 0.6;
audioOn.loop = true;

$btnToggle.addEventListener("click", () => $btnToggle.classList.contains("apagado") ? encender() : apagar());

const toggleStatus = (classList) => {
    classList.toggle("apagado");
};

const encender = () => {
    toggleStatus($btnToggle.classList);
    $imgBatman.src = rutaImgBatmanOn;
    audioOn.play();
    $textoAyuda.textContent = "I'm Batman.";
};

const apagar = () => {
    toggleStatus($btnToggle.classList);
    $imgBatman.src = rutaImgBatmanOff;
    audioOn.pause();
    audioOn.currentTime = 0;
    audioOff.play();
    $textoAyuda.textContent = "¡Haz click en la linterna!";
}
