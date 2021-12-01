export function mostrarHora(_diaSemana, _diaNumero, _mes, _anio, _hora, _minutos, _ampm, _segundos, _btnPlay, _btnStop) {
    let temporizador; // esta variable la creo para guardar el ID del serInterval asi dps puedo detenerlo con clearInterval

    document.addEventListener("click", (e) => {
        if (e.target.matches(_btnPlay)) {            
            temporizador = setInterval(() => {
                // creo el objeto fecha y obtengo los datos necesarios
                let fecha = new Date();
                let hora = fecha.getHours();
                let minutos = fecha.getMinutes();
                let segundos = fecha.getSeconds();
                let diaSemana = fecha.getDay();
                let dia = fecha.getDate();
                let mes = fecha.getMonth();
                let anio = fecha.getFullYear();
                let ampm;

                // creo 2 arrays q contienen los dias y meses ya q los metodos para obtenerlos me devuelven un numero
                let semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
                let mesesAnio = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

                // fecha
                document.querySelector(_diaSemana).textContent = semana[diaSemana];
                document.querySelector(_diaNumero).textContent = `${dia} de `;
                document.querySelector(_mes).textContent = `${mesesAnio[mes]} del `;
                document.querySelector(_anio).textContent = anio;

                // hora
                if (hora >= 12) {
                    hora = hora - 12;
                    ampm = "PM"
                } else {
                    ampm = "AM"
                }

                if (hora == 0) {
                    hora = 12;
                }

                document.querySelector(_hora).textContent = hora;
                document.querySelector(_ampm).textContent = ampm;

                if (minutos < 10) {
                    minutos = `0${minutos}`;
                }

                if (segundos < 10) {
                    segundos = `0${segundos}`;
                }

                document.querySelector(_minutos).textContent = minutos;
                document.querySelector(_segundos).textContent = segundos;
            }, 1000);

            // Las lineas siguientes son para interactuar sobre los botones
            e.target.disabled = true; // desabilito el boton para no generar listeners de gusto
            e.target.style.backgroundColor = "#ccc"; // muestro lo de arriba para feedback del usuario
            document.querySelector(".off").style.backgroundColor = "#4F5FB5";
        }

        // funcionalidad para boton Stop
        if (e.target.matches(_btnStop)) {
            clearInterval(temporizador);
            e.target.style.backgroundColor = "#ccc";
            document.querySelector(".on").style.backgroundColor = "#4F5FB5";
            document.querySelector(".on").disabled = false; 
        };
    })

}