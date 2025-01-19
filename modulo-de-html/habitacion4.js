const contendor = document.querySelector('#contenedor')
const boton = document.querySelector('#prueba')
const reserva = document.querySelector('#reserva')
const button = document.querySelector('.button')
const modal = document.querySelector('.modal')





reserva.addEventListener('click', ()=> {

    const user = JSON.parse(localStorage.getItem('login_success')) || false
    if(!user) {
        window.location.href = '/Proyecto-Javascript/login.html'
    } 

    alert("Ya estas registrado")

    const datos = {
        id: 3,
      nombre: "Oscar Diaz",
      email: "aaronjones2429@gamil.com",
      password: "contraseña456",
      telefono: "+0987654321",
      reservas: []
    };
    
    fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
    })
    .then((res) => {
        // Verificamos el código de estado de la respuesta
        if (!res.ok) {
            // Si la respuesta no es 200 OK, lanza un error
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json(); // Devolvemos el cuerpo como JSON si la respuesta fue exitosa
    })
    .then((datos) => {
        console.log("Respuesta de la API:", datos);
    })
    .catch((error) => {
        // Imprimimos un mensaje de error en caso de que algo falle
        console.error('Error:', error);
    });
    

})


Pintar()


function Pintar() {


    fetch("http://localhost:3000/habitaciones/4")
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
                <span class="inline-flex items-center px-4 py-2 rounded-full bg-blue-200 text-sm font-medium text-gray-800">
                    
                    <p> Estado: ${datos.estado}</p>
                </span>
            </div>
    
            
            
        </div>
    </article>
    </main>`;

            contenedor.append(NuevoDivs)
        })

}



button.addEventListener('click',function(){
    console.log(modal.classList);
    modal.classList.add('show');
    console.log(modal.classList)
})