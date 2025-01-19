const contendor = document.querySelector('#contenedor')
const boton = document.querySelector('#prueba')
const reserva = document.querySelector('#reserva')
const button = document.querySelector('#button')
const modal = document.querySelector('.modal')
const CerrarMenu = document.querySelector('.modal_close');
const botonConfirmar = document.querySelector('#confirmar');
const Inputnombre = document.querySelector('#nombreform')


CerrarMenu.addEventListener('click', function(){
    modal.classList.remove('show');

})

reserva.addEventListener('click', (e)=> {
    e.preventDefault()
    const user = JSON.parse(localStorage.getItem('login_success')) || false
    if(!user) {
        window.location.href = '/Proyecto-Javascript/login.html'
    } 
  /*
    alert("Ya estas registrado")
    modal.classList.add('show');

    const NombreTitular = Inputnombre.value
    console.log(NombreTitular)

    */

    console.log(user.email)
    

    const datos = {
        id: 3,
      nombre: user.name,
      email: user.email,
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
       
        if (!res.ok) {
           
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json(); 
    })
    .then((datos) => {
        console.log("Respuesta de la API:", datos);
    })
    .catch((error) => {
      
        console.error('Error:', error);
    });
    

    alert("Reserva Exitosa")

    

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

/*

button.addEventListener('click',function(){
    console.log(modal.classList);
    modal.classList.add('show');
    console.log(modal.classList)
})

*/