const formulario = document.getElementById('formulario-contacto');

formulario.addEventListener('submit', (e) => {

	e.preventDefault();
 const nombre = document.getElementById('nombre').value.trim();
 const email = document.getElementById('email').value.trim();
 const mensaje = document.getElementById('mensaje').value.trim();

 if(nombre && email && mensaje){
 alert ("Gracias por tu mensaje");
 }else{
 alert ("Por favor rellena todos los campos");
 }

});
