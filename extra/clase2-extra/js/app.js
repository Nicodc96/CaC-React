const $poster = document.querySelector("#poster");
const poster_h = $poster.clientHeight;
const poster_w = $poster.clientWidth;
const $avengers_sound = new Audio("./assets/avengers-endgame.mp3");

$avengers_sound.volume = 0.5;

$poster.addEventListener("mousemove", (e) => {
    const { layerX, layerY } = e;
    const yRotation = (layerX - poster_w / 2) / poster_w * 20;
    const xRotation = (layerY - poster_h / 2) / poster_h * 20;

    const allTransformations = `perspective(500px) scale(1.05) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    $poster.style.transform = allTransformations;
    $avengers_sound.play();
});

$poster.addEventListener("mouseout", () => {
    $poster.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
    $avengers_sound.pause();
    $avengers_sound.currentTime = 0;
});