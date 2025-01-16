const prueba = document.querySelector('#prueba')
const contendor = document.querySelector('#contenidojs')
const boton = document.querySelector('#boton67')


prueba.addEventListener('click', () => {
    const nuevodiv = document.createElement('div')
    nuevodiv.classList.add('nuevodiv')

    for (let i = 1; i < 2; i++) {
        fetch(` http://localhost:3000/habitaciones/1`)
            .then(res => res.json())
            .then((datos) => {
                console.log(datos)


                nuevodiv.innerHTML = `
        <div class="grid md:grid-cols-2 gap-6">
                
        <div class="relative h-64 md:h-full">
          <img 
            src="/Proyecto-Javascript/img/Habitaciones.jpeg"
            class="absolute inset-0 w-full h-full object-cover"
          />
        </div>
  
       
        <div class="p-6 md:p-8 flex flex-col justify-center">
          <h2 class="text-3xl font-bold mb-4">${datos.nombre}</h2>
          <h3 class"text-3xl font-bold mb-4">Precio: ${datos.precio}</3>
          <p class="text-gray-600 mb-6">
            ${datos.descripcion}
          </p>
          
    
            <button class="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-blue-900 text-white font-medium hover:bg-blue-800 transition-colors w-full sm:w-auto text-center"> VER DETALLES</button>
        </div>
      </div>
    </div>        
        `;


                contendor.append(nuevodiv)


            })

    }
})



