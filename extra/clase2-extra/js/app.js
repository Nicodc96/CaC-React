import { hoverEffect, resetEffect } from "./functions.js";

const $poster = document.querySelector("#poster");
const $logo = document.querySelector("#logoAvengers");
const $avengers_sound = document.querySelector("#audioPoster");

$avengers_sound.volume = 0.5;

$poster.addEventListener("mousemove", (e) => {
    const { clientHeight, clientWidth } = $poster;
    hoverEffect($poster, clientWidth, clientHeight, e);
});

$poster.addEventListener("click", () => {
    $avengers_sound.play();
    $avengers_sound.muted = false;
})

$poster.addEventListener("mouseout", () => {
    resetEffect($poster);
    $avengers_sound.pause();
});

$logo.addEventListener("mousemove", (e) => {
    const { clientHeight, clientWidth } = $logo;
    hoverEffect($logo, clientWidth, clientHeight, e);
});

$logo.addEventListener("mouseout", () => {
    resetEffect($logo);
});
