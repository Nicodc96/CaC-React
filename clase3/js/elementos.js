const crearModal = (numEjercicio, elementsModalBody) => {
    let id = `modalEjercicio${numEjercicio}`;
    const mainModal = createElementCustom("div", ["modal", "fade"], "", {
        "data-bs-backdrop": "static",
        "id": id,
        "aria-labelledby": `${id}Label`,
        "aria-hidden": "true"
    });
    const modalDialog = createElementCustom("div", ["modal-dialog", "modal-dialog-centered", "modal-lg"], "", {});
    const modalContent = createElementCustom("div", ["modal-content"], "", {});
    modalContent.appendChild(modalHeader(numEjercicio));
    modalContent.appendChild(modalBody(elementsModalBody));
    modalContent.appendChild(modalFooter());
    modalDialog.appendChild(modalContent);
    mainModal.appendChild(modalDialog);
    return mainModal;
};

const modalHeader = (numEjercicio) => {
    const modalHeader = createElementCustom("div", ["modal-header"], "", {});
    modalHeader.appendChild(createElementCustom("h4", ["modal-title", "fs-5"], `Ejercicio ${numEjercicio}`, {
        "id": `modalEjercicio${numEjercicio}Label`
    }));
    modalHeader.appendChild(createElementCustom("button", ["btn-close"], "", {
        "type": "button",
        "data-bs-dismiss": "modal",
        "aria-label": "Close"
    }));
    return modalHeader;
}

const modalBody = (elements) => {
    const modalBody = createElementCustom("div", ["modal-body"], "", {});
    if (Array.isArray(elements) && elements.length > 0) {
        elements.forEach(el => modalBody.appendChild(el));
    }
    return modalBody;
}

const modalFooter = () => {
    const modalFooter = createElementCustom("div", ["modal-footer"], "", {});
    modalFooter.appendChild(createElementCustom("button", ["btn", "btn-secondary"], "Cerrar", {
        "type": "button",
        "data-bs-dismiss": "modal"
    }));
    return modalFooter;
}

const crearModalButton = (numEjercicio) => {
    return createElementCustom("button", ["btn", "btn-primary"], `Ejercicio ${numEjercicio}`, { 
    "data-bs-toggle": "modal",
    "data-bs-target": `#modalEjercicio${numEjercicio}`
    });
}

const crearContenedorModal = (numEjercicio) => createElementCustom("article", [], "", { "id": `containerEjercicio${numEjercicio}` });

const createElementCustom = (tipoElemento, clases, contenidoTexto, atributos) => {
    const newElement = document.createElement(tipoElemento);
    if (Array.isArray(clases) && clases.length > 0) {
        newElement.classList.add(...clases);
    }
    if (contenidoTexto.length > 0 && contenidoTexto != null && contenidoTexto != undefined) {
        newElement.textContent = contenidoTexto;
    }
    if (typeof (atributos) == "object") {
        Object.keys(atributos).forEach((atributo) => {
            newElement.setAttribute(atributo, atributos[atributo]);
        })
    }
    return newElement;
}

export { createElementCustom, crearModal, crearModalButton, crearContenedorModal }