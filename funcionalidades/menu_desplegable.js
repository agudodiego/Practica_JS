//1er parametro es el boton q desencadena la accion
//2do parametro es el menu q se va a mostrar/ocultar
//3er parametro es el link interno del menu q lo cierra
export default function visibilidadMenu (btnPanel, menu, menuLink){

    document.addEventListener("click", (e)=>{
        if(e.target.matches(btnPanel)){
            document.querySelector(menu).classList.toggle("menu-activo");   //toggle saca la clase si esta y la agrega si no la tiene          
        }

        if(e.target.matches(menuLink)){
            document.querySelector(menu).classList.remove("menu-activo");  //remove saca la clase que agregue arriba 
        }
    })
}