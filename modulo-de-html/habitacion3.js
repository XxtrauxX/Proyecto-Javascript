const contendor = document.querySelector('#contenedor')
const boton = document.querySelector('#prueba')



Pintar()


function Pintar() {


    fetch("http://localhost:3000/habitaciones/3")
        .then(res => res.json())
        .then((datos) => {

            console.log(datos)
            const NuevoDivs = document.createElement('div')

            NuevoDivs.innerHTML = `
    <main class="max-w-7xl mx-auto p-4">
    <article class="flex flex-col md:flex-row gap-6 items-center bg-white rounded-lg overflow-hidden shadow-sm">
        
        <div class="w-full md:w-1/2">
            <img 
                src="${datos.img}"
                alt="Persona caminando por sendero tropical" 
                class="w-full h-[400px] object-cover"
            >
        </div>
    
        <!-- Contenido -->
        <div class="w-full md:w-1/2 p-6 space-y-6">
            <header>
                <h1 class="text-3xl font-bold text-gray-900 mb-4">${datos.nombre}</h1>
                <p class="text-lg text-gray-600">
                    ${datos.descripcion}
                </p>
                <h1>Precio:$ ${datos.precio}</h1>
                <h1>Comodidades:  ${datos.servicios}</h1>
            </header>
    
            
            <div class="flex gap-3">
                <span class="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-800">
                    Fechas Disponibles:
                    ${datos.disponibilidad[0].fecha} , 
                    ${datos.disponibilidad[1].fecha}
                </span>
                <span class="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-800">
                    
                    <p> Estado: ${datos.estado}</p>
                </span>
            </div>
    
            <!-- Botón CTA -->
            <div class="pt-4">
                <a 
                    href="#" 
                    class="inline-block px-6 py-3 bg-[#00264C] text-white font-medium rounded hover:bg-[#003366] transition-colors duration-200"
                >
                    RESERVAR
                </a>
            </div>
        </div>
    </article>
    </main>`;

            contenedor.append(NuevoDivs)
        })

}