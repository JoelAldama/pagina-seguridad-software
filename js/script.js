document.addEventListener("DOMContentLoaded", function(e){
    
    const parrafos = document.querySelectorAll(".descipcion");

    let alturas = [];
    let alturaMaxima = 0;

    const aplicarAlturas = (function aplicarAlturas(){

        parrafos.forEach(parrafo =>{

            if(alturaMaxima == 0){
                alturas.push(parrafo.clientHeight);
            }else{
                parrafo.style.height = alturaMaxima + "px";
            }

        });
        return aplicarAlturas;

    })();

    alturaMaxima = Math.max.apply(Math, alturas);

    aplicarAlturas();
});

//Desactivar clic derecho
$("body").on("contextmenu", function(e){
    return false;
});

//Desactivar Copiar
$("body").bind('cut copy paste', function(e){
    e.preventDefault();
})

//Desactivar clic derecho
$("main").on("contextmenu", function(e){
    return false;
});

//Desactivar Copiar
$("main").bind('cut copy paste', function(e){
    e.preventDefault();
})

window.frames("Trabajos").document.oncontextmenu = function(){ return false; };
