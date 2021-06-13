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
