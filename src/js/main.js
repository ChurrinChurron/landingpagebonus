let menuBoton = document.querySelector(".navMovil__boton");
let movilMenu = document.querySelector(".navMovil__menu");
let secciones = document.querySelectorAll("section");
let enlacesMenu = document.querySelectorAll(".navDesktop__menu a");
let donarAqui = document.querySelector("#donarEnlace");
let tipoDocu = document.querySelector(".type-document");
let inputDocu = document.getElementById("docu");
let inputDate = document.getElementById("birthday");
let maxNum = 8;
let selDocumento = document.getElementById("selec-dni");
let selPasaporte = document.getElementById("selec-pasaporte");
let selCe = document.getElementById("selec-ce");
let formulario = document.getElementById("formularioDatos");
let abrirListaDocu = document.querySelector(".modal-document");
let verMasPrensa = document.querySelectorAll(".verMas");
let infoPrensa = document.querySelector(".info-prensa");
let infoPrensaDos = document.querySelector(".info-prensa-dos");
let verListaDocu = document.querySelector(".selec-doc");
let botonCerrar = document.querySelectorAll(".modal-close");
let desapModal = document.querySelectorAll(".modal");


//FUNCION MENU MOVIL

menuBoton.addEventListener("click", () => {

    movilMenu.classList.toggle("none");
});

//FUNCION ENLACES ACTIVOS

window.addEventListener("scroll", () => {

    secciones.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop + 750;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height) {

            for(let i=0; i < enlacesMenu.length; i++) {

                enlacesMenu[i].classList.remove("active");
                document.querySelector(`.navDesktop__menu a[href*=${id}]`).classList.add("active");
            }
        }

        else if(top < 750) {

            for(let i=0; i < enlacesMenu.length; i++) {
                
                document.querySelector(`.navDesktop__menu a[href*=${id}]`).classList.remove("active");
                enlacesMenu[0].classList.add("active");
            }
        }
    });
});

//FUNCION ENLACE FLOTANTE DONACION

window.addEventListener("resize", () => {

    if(window.innerWidth < 992) {

        window.addEventListener("scroll", () => {

            let top = window.scrollY;
        
            if((top < 450) || (top > 4400 && top < 5500)) {
        
                donarAqui.style.display = "none";
        
            } else {
        
                donarAqui.style.display = "block";
            }
        });

    } else {

        window.addEventListener("scroll", () => {

            let top = window.scrollY;
        
            if((top < 450) || (top > 1990 && top < 2700)) {
        
                donarAqui.style.display = "none";
        
            } else {
        
                donarAqui.style.display = "block";
            }
        });
    }
})

//FUNCION MODALES (POP-UPS)

abrirListaDocu.addEventListener("click", () => {

    verListaDocu.classList.remove("des-sel");
});

for(let i = 0; i < verMasPrensa.length; i++) {

    verMasPrensa[0].addEventListener("click", () => {

        infoPrensa.classList.remove("des-sel");
    })

    verMasPrensa[1].addEventListener("click", () => {

        infoPrensaDos.classList.remove("des-sel");
    })  
}

botonCerrar.forEach(cerr => {

    cerr.addEventListener("click", () => {

        verListaDocu.classList.add("des-sel");
        infoPrensa.classList.add("des-sel");
        infoPrensaDos.classList.add("des-sel");
    })
})
   
desapModal.forEach(desap => {

    desap.addEventListener("click", () => {

        desap.classList.add("des-sel");
    })
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
