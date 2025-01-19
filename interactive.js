
// sección de botones

const BotonHero = document.querySelector('#botonhero')
const boton4 = document.querySelector('#boton4')
const boton5 = document.querySelector('.boton5')
const correoBoton = document.querySelector('#correo')
const BotonInicio = document.querySelector('#inicio-sesion')
const BotonSalir = document.querySelector('#salir')


/*
BotonInicio()

function BotonInicio(){
  const user = JSON.parse(localStorage.getItem('login_success')) || false
    if(!user) {
      BotonInicio.textContent = "I Sesión"
    } 
    else {

      BotonInicio.textContent = "Sesión Iniciada"
    }
   
}
*/


BotonHero.addEventListener('click', ()=> {

  window.location.href="/Proyecto-Javascript/reservas.html"
  
})


boton4.addEventListener('click', ()=> {

  window.location.href="/Proyecto-Javascript/reservas.html"
  
})


boton5.addEventListener('click', ()=> {

  window.location.href="/Proyecto-Javascript/reservas.html"
  
})



correoBoton.addEventListener('click', (e)=> {
   e.preventDefault()
  alert("Gracias por su registro!!")
  window.location.href="https://workspace.google.com/intl/es-419/gmail/"
  
})


BotonInicio.addEventListener('click', (e)=> {
  e.preventDefault()
  const user = JSON.parse(localStorage.getItem('login_success')) || false
    if(!user) {
        window.location.href = '/Proyecto-Javascript/login.html'
    } 
    BotonInicio.textContent = "Sesion iniciada"
    alert("Ya estas registrado")
})




BotonSalir.addEventListener('click', (e)=>{
  e.preventDefault()
    alert('Hasta pronto!')
    localStorage.removeItem('login_success')
    //window.location.href = '/Proyecto-Javascript/index.html'
})


