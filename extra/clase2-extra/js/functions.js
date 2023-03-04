const hoverEffect = (element, element_w, element_h, event) => {
    const { layerX, layerY } = event;
    const yRotation = (layerX - element_w / 2) / element_w * 20;
    const xRotation = (layerY - element_h / 2) / element_h * 20;

    const allTransformations = `perspective(500px) scale(1.03) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    element.style.transform = allTransformations;
};

const resetEffect = (element) => {
    element.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
};

export { hoverEffect, resetEffect};