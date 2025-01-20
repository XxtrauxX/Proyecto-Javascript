const prueba = document.querySelector('#prueba')
const contendor = document.querySelector('#contenidojs')
const boton = document.querySelector('#boton67')
const PrinBoton = document.querySelector('#botonsubmit')
const numeroPer = document.querySelector('#numPersonas')
const BotonRedirec = document.querySelector('#redi')
const formulario = document.querySelector('#formulario')
const FechaInicios = document.querySelector('#fechaInicio')
const FechaFin = document.querySelector('#fechaFin')



/*

// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
  // Obtiene referencias a elementos del DOM
  const formulario = document.getElementById('formulario');
  const contenidoJs = document.getElementById('contenidojs');

  // Agrega un event listener al formulario para manejar la búsqueda de habitaciones
  formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Previene el envío del formulario por defecto

    // Obtiene los valores de los campos del formulario
    const fechaInicio = document.getElementById('fechaInicio').value;
    const fechaFin = document.getElementById('fechaFin').value;
    const numPersonas = parseInt(document.getElementById('numPersonas').value);

    // Realiza la búsqueda de habitaciones
    buscarHabitaciones(fechaInicio, fechaFin, numPersonas);
  });

  // Función principal para buscar y mostrar habitaciones disponibles
  function buscarHabitaciones(fechaInicio, fechaFin, numPersonas) {
    // Realiza una petición fetch a la API para obtener todas las habitaciones
    fetch('http://localhost:3000/habitaciones')
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo obtener las habitaciones');
        }
        return response.json();
      })
      .then(habitaciones => {
        // Filtra las habitaciones según disponibilidad y capacidad
        const habitacionesDisponibles = habitaciones.filter(habitacion => {
          return esHabitacionDisponible(habitacion, fechaInicio, fechaFin, numPersonas);
        });

        // Muestra las habitaciones disponibles
        mostrarHabitaciones(habitacionesDisponibles);
      })
      .catch(error => {
        console.error('Error:', error);
        contenidoJs.innerHTML = '<p class="text-center text-xl font-bold mt-8">Error al obtener las habitaciones. Por favor, intente nuevamente.</p>';
      });
  }

  // Función para verificar si una habitación está disponible
  function esHabitacionDisponible(habitacion, fechaInicio, fechaFin, numPersonas) {
    // Verifica si la habitación tiene capacidad suficiente
    if (habitacion.personas < numPersonas) return false;

    // Verifica la disponibilidad para cada fecha en el rango seleccionado
    const inicio = new Date(fechaInicio);
    const fin = new Date(fechaFin);
    for (let fecha = new Date(inicio); fecha <= fin; fecha.setDate(fecha.getDate() + 1)) {
      const fechaString = fecha.toISOString().split('T')[0];
      const disponibilidadFecha = habitacion.disponibilidad.find(d => d.fecha === fechaString);
      if (!disponibilidadFecha || !disponibilidadFecha.disponible) {
        return false;
      }
    }

    return true;
  }

  // Función para mostrar las habitaciones disponibles en el DOM
  function mostrarHabitaciones(habitaciones) {
    if (habitaciones.length === 0) {
      contenidoJs.innerHTML = '<p class="text-center text-xl font-bold mt-8">No hay habitaciones disponibles para las fechas y número de personas seleccionados.</p>';
      return;
    }

    let html = '<h2 class="text-3xl font-bold text-center mb-8">Habitaciones Disponibles:</h2>';
    habitaciones.forEach(habitacion => {
      html += `
        <div class="grid md:grid-cols-2 mx-32 border-y-2 border-gray-300 gap-6 mb-8">
          <div class="relative h-64 md:h-full">
            <img 
              src="${habitacion.img}"
              class="absolute inset-0 w-full h-full object-cover"
              alt="${habitacion.nombre}"
            />
          </div>
          <div class="p-6 md:p-8 flex flex-col justify-center">
            <h2 class="text-3xl font-bold mb-4">${habitacion.nombre}</h2>
            <h3 class="text-xl font-bold mb-2">Precio: $ ${habitacion.precio}</h3>
            <h3 class="text-xl font-bold mb-2">Max-Personas: ${habitacion.personas}</h3>
            <p class="text-gray-600 mb-6">
              ${habitacion.descripcion}
            </p>
            <p class="text-gray-600 mb-4">Servicios: ${habitacion.servicios.join(', ')}</p>
            <button onclick="${habitacion.boton}" class="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-blue-900 text-white font-medium hover:bg-blue-800 transition-colors w-full sm:w-auto text-center">
              VER DETALLES
            </button>
          </div>
        </div>
      `;
    });

    contenidoJs.innerHTML = html;
  }
});
 */



PrinBoton.addEventListener('click', (e) => {

  e.preventDefault()

  const fechaInicio = FechaInicios.value
  console.log(fechaInicio)
  const resul = FechaFin.value
  console.log(resul)
  const NumeroFin = numeroPer.value
  console.log(NumeroFin)

  fetch(`http://localhost:3000/habitaciones/`)
    .then(res => res.json())
    .then((datos) => {
      console.log(datos)



      datos.forEach(elementos => {

        const nuevodiv = document.createElement('div')
        nuevodiv.classList.add('nuevodiv')

        nuevodiv.innerHTML = `
              <div class="grid md:grid-cols-2 mx-32 border-y-2 border-gray-300 gap-6">
                      
              <div class="relative h-64 md:h-full">
                <img 
                  src="${elementos.img}"
                  class="absolute inset-0 w-full h-full object-cover"
                />
              </div>
        
             
              <div class="p-6 md:p-8 flex flex-col justify-center">
                <h2 class="text-3xl font-bold mb-4">${elementos.nombre}</h2>
                <h3 class"text-3xl font-bold mb-4">Precio: $ ${elementos.precio}</3>
                <h3 class"text-3xl font-bold mb-4">Max-Personas: ${elementos.personas}</3>
                <p class="text-gray-600 mb-6">
                  ${elementos.descripcion}
                </p>
                
          
                  <button onclick="${elementos.boton}" class="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-blue-900 text-white font-medium hover:bg-blue-800 transition-colors w-full sm:w-auto text-center"> VER DETALLES</button>
              </div>
            </div>
          </div>        

          <br><br>
              `;
              
              if (contendor.childElementCount < 30) {
                contendor.append(nuevodiv)
            } else {

               
            }
            
            /*

            const NewArr = elementos.filter(function(el){
              return (el.price === 2);
            });

            

            console.log(NewArr)

            */


               //contendor.append(nuevodiv)


               
               const BotonRedirec = document.querySelector('#redi')

      });


     
      

    })

    

})


BotonRedirec.addEventListener('click', (e) => {
        e.preventDefault()
  alert("Gracias por su registro!!")
 
})


