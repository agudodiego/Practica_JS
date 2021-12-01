import visibilidadMenu from "./funcionalidades/menu_desplegable.js";
import {mostrarHora} from "./funcionalidades/reloj.js"; /*cuando exporto sin default, lo q se importa va entre {} */
import {iniciarAgenda, cargarContacto} from "./funcionalidades/agenda.js"
import {usarCalculadora} from "./funcionalidades/calculadora.js";


const database = window.localStorage; //con esto accedo al local storage del navegador

document.addEventListener("DOMContentLoaded", (e)=>{   /* El listener va a actuar una vez cargado el DOM */
    visibilidadMenu(".btn-menu__logo",".header-panel",".header-menu__enlace")   /*solo paso los selectores ya q el evento .matches es lo q espera */

    // los ultimos 2 parametros son los botones de play y stop
    mostrarHora(".diaSemana",".diaNumero",".mes",".anio",".horas",".minutos",".ampm",".segundos",".on",".off"); 
    
    iniciarAgenda(database,'.agenda__nombre','.agenda__telefono','.agenda__email','.agenda__boton','.agenda__contactos');
    cargarContacto(database, '.agenda__contactos');

    usarCalculadora(".calculadora-pantalla",".calculadora-teclado")

})