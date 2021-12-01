export function usarCalculadora(_pantalla, _teclado) {

    const pantalla = document.querySelector(_pantalla);
    const teclado = document.querySelector(_teclado);

    teclado.addEventListener("click", (e) => {

        if (e.target.matches(`${_teclado} div`)) {
            switch (e.target.innerText) {
                case "C":
                    borrar(pantalla);
                    break;
                case "=":
                    calcular(pantalla);
                    break;
                case "+/-":
                    signo(pantalla);
                    break;

                default:
                    actualizar(e.target.innerText, pantalla);
                    break;
            }
        }
    })    
}


function actualizar (tecla, pantalla) {

    if (pantalla.innerText === "0" && tecla === "."){
        pantalla.innerText = "0" + tecla;
    }else if (pantalla.innerText === "0" ){
        pantalla.innerText = tecla;
    }else{
        pantalla.innerText += tecla;
    }            
}

function signo (pantalla){

    // Number() convierte una cadena a numero
    if (Number(pantalla.innerText) > 0 ){
        pantalla.innerText = "-" + pantalla.innerText;
    }else{
        pantalla.innerText = Number(pantalla.innerText) * -1;
    }
}

function borrar (pantalla){
    pantalla.innerText = "0";
}

function calcular (pantalla){    
    pantalla.innerText = eval(pantalla.innerText);
}