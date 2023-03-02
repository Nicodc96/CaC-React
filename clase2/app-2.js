const $imgBatman = document.querySelector("#imgBatman");
const $btnToggle = document.querySelector("#botonToggle");
const audioOn = new Audio("./sound/batiEncendido.mp3");
const audioOff = new Audio("./sound/batiClick.mp3");
const rutaImgBatmanOn = "./img/batmanON.gif";
const rutaImgBatmanOff = "./img/batmanOFF.jpg";

audioOn.loop = true;

$btnToggle.addEventListener("click", () => $btnToggle.classList.contains("apagado") ? encender() : apagar());

const toggleStatus = (classList) => {
    classList.toggle("apagado");
};

const encender = () => {
    toggleStatus($btnToggle.classList);
    $imgBatman.src = rutaImgBatmanOn;
    audioOn.play();
};

const apagar = () => {
    toggleStatus($btnToggle.classList);
    $imgBatman.src = rutaImgBatmanOff;
    audioOn.pause();
    audioOn.currentTime = 0;
    audioOff.play();
}
