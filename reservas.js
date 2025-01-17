const prueba = document.querySelector('#prueba')
const contendor = document.querySelector('#contenidojs')
const boton = document.querySelector('#boton67')
const PrinBoton = document.querySelector('#botonsubmit')
const numeroPer = document.querySelector('#numPersonas')
const BotonRedirec = document.querySelector('#redi')



PrinBoton.addEventListener('click', (e) => {

  e.preventDefault()

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
                <p class="text-gray-600 mb-6">
                  ${elementos.descripcion}
                </p>
                
          
                  <button id="redi" class="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-blue-900 text-white font-medium hover:bg-blue-800 transition-colors w-full sm:w-auto text-center"> VER DETALLES</button>
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

      });


     
      

    })

    

})


BotonRedirec.addEventListener('click', () => {
        
  alert("Gracias por su registro!!")
 
})



