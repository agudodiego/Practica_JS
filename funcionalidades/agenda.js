export function iniciarAgenda(database,_agendaNombre, _agendaTelefono, _agendaEmail, _agendaBoton, _agendaContactos) {
    
    document.addEventListener("click", (e) => {

        if (e.target.matches(_agendaBoton)) {
            const nombre = document.querySelector(_agendaNombre);
            const telefono = document.querySelector(_agendaTelefono);
            const mail = document.querySelector(_agendaEmail);
            const boton = document.querySelector(_agendaBoton);

            const agendaContactos = document.querySelector(_agendaContactos);

            if (nombre.value == '' || telefono.value == '' || mail.value == ''){
                alert("Para AGREGAR UN CONTACTO debes cargar todos los campos");
            }else{
                let contacto = {
                    id: Math.random(1, 100),
                    nombre: nombre.value,
                    telefono: telefono.value,
                    mail: mail.value,
                }
                guardarContacto(database, contacto);
            }            
        }
    })
}

export function cargarContacto(database,_parentNode) { // esta func. recupera los contactos
    const parentNode = document.querySelector(_parentNode);
    let clave;
    let claves = Object.keys(database); // se guardan los id en un string
    console.log(claves);
    for (clave of claves) {
        let contacto = JSON.parse(database.getItem(clave));
        mostrarContacto(parentNode, contacto, database);        
    }    
}

function guardarContacto(database, contacto) {
    database.setItem(contacto.id, JSON.stringify(contacto)); //setItem es el metodo para meter algo en el localstorage, y JSON.Stringify agarra un tipo Object y lo pasa a string (para poder usarlo)
    window.location.reload();
}

function mostrarContacto(parentNode, contacto, database) {
    let divContacto = document.createElement('div'); //se crean los elementos html
    let contactoNombre = document.createElement('h3');
    let contactoTelefono = document.createElement('p');
    let contactoMail = document.createElement('p');
    let iconoBorrar = document.createElement('span');

    contactoNombre.innerHTML = contacto.nombre; //se imprimen en los elementos html la informacion del objeto
    contactoTelefono.innerHTML = contacto.telefono;
    contactoMail.innerHTML = contacto.mail;
    iconoBorrar.innerHTML = 'delete_forever';

    divContacto.classList.add('agenda__contacto'); //le pongo a los elementos creados las clases correspondientes
    iconoBorrar.classList.add('material-icons', 'icono'); //agrega dos clases a la vez  

    iconoBorrar.addEventListener("click", () => {
        database.removeItem(contacto.id);
        window.location.reload();
    })

    divContacto.appendChild(contactoNombre); //agrego los hijos dentro del div contenedor que creamos
    divContacto.appendChild(contactoTelefono);
    divContacto.appendChild(contactoMail);
    divContacto.appendChild(iconoBorrar);

    parentNode.appendChild(divContacto);

}