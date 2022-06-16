let menuBoton = document.querySelector(".navMovil__boton");
let movilMenu = document.querySelector(".navMovil__menu");
let tipoDocu = document.querySelector(".type-document");
let inputDocu = document.getElementById("docu");
let inputDate = document.getElementById("birthday");
let maxNum = 8;
let selDocumento = document.getElementById("selec-dni");
let selPasaporte = document.getElementById("selec-pasaporte");
let selCe = document.getElementById("selec-ce");
let formulario = document.getElementsByTagName("form");
let abrirListaDocu = document.querySelector(".modal-document");
let verListaDocu = document.querySelector(".selec-doc");
let botonCerrar = document.querySelector(".modal-close");
let desapModal = document.querySelector(".modal");
let botonUno = document.getElementById("donar-uno");
let botonDos = document.getElementById("donar-dos");
let pasos = document.querySelectorAll(".pasos");
let imagenes = document.querySelectorAll("main img");

//FUNCION MENU MOVIL

menuBoton.addEventListener("click", () => {

    movilMenu.classList.toggle("none");
});

//FUNCION MODAL

abrirListaDocu.addEventListener("click", () => {

    verListaDocu.classList.remove("des-sel");
});

botonCerrar.addEventListener("click", () => {

    verListaDocu.classList.add("des-sel");
})


desapModal.addEventListener("click", () => {

    desapModal.classList.add("des-sel");
})

//FUNCION FORMULARIOS 

inputDocu.addEventListener("input", e => {

    if(e.target.value > maxNum) {
    
        e.target.value = e.target.value.slice(0, maxNum);
    }
    
    });
    
    selDocumento.addEventListener("click", () => {
        
        tipoDocu.innerHTML = "D.N.I";
        none.classList.add("des-sel");
        inputDocu.type = "number";
        formulario.reset();
        
        inputDocu.addEventListener("input", e => {
    
            if(e.target.value > maxNum) {
    
                e.target.value = e.target.value.slice(0, maxNum);
            }
    
        });
    });
    
    selPasaporte.addEventListener("click", () => {
    
        tipoDocu.innerHTML = "Pasaporte";
        none.classList.add("des-sel");
        inputDocu.type = "text";
        inputDocu.maxLength = 15;
        formulario.reset();
    
    });
    
    selCe.addEventListener("click", () => {
    
        tipoDocu.innerHTML = "C.E";
        none.classList.add("des-sel");
        inputDocu.type = "text";
        inputDocu.maxLength = 9;
        formulario.reset();
    
    });

let inputDateMask = function inputDateMask(el) {

    el.addEventListener("input", e => {

        if(e.keyCode !== 8) {
            
            if(e.keyCode < 47 || e.keyCode > 57) {
                   
                e.preventDefault();
            }

            const len = el.value.length;

                if(len !== 1 || len !== 3) {
                        
                        if(e.keyCode == 47) {
                        e.preventDefault();
                    }
                }
                
                if(len === 3 || len === 6){
                    
                    el.value = el.value.substr(0, el.value.length-1);
                }

                if(len === 2 || len === 5) {
                    el.value += '/';
                }
            }
        });
    };

    inputDateMask(inputDate);

//FUNCION SLIDE FORMULARIO

botonUno.addEventListener("click", e => {

    e.preventDefault();

    for(let i = 0; i < formulario.length; i++) {

        formulario[i].style.right = "21.5em";
    }

    for(let i = 0; i < pasos.length; i++) {

        pasos[0].classList.remove("borde");
        pasos[1].classList.add("borde");
    }
})

botonDos.addEventListener("click", e => {

    e.preventDefault();

    if(window.innerWidth > 992) {

        for(let i = 0; i < formulario.length; i++) {

            formulario[i].style.right = "43em";
        }
    } else if(window.innerWidth < 992) {

        for(let i = 0; i < formulario.length; i++) {

            formulario[i].style.right = "36.8em";
        }
    }

    for(let i = 0; i < pasos.length; i++) {

        pasos[1].classList.remove("borde");
        pasos[2].classList.add("borde");
    }

    if(window.innerWidth > 992) {

        imagenes.forEach(img => {

            img.style.display = "block";
        });
    } else if(window.innerWidth < 992) {

        img.style.display = "none";
    }
})
