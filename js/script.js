document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactenos").addEventListener('submit', validarFormulario); 
  });

  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if(nombre.length < 3) {
      alert('Debe de Ingresar al menos 3 caracteres en el campo nombre');
      return;
    }
    var telefono = document.getElementById('telefono').value;
    if (telefono.length < 9) {
      alert('Número de telefono invalido debe de Agregar al menos 9 digitos');
      return;
    }
    var email = document.getElementById('email').value;

    if (email.length === 0) {
      alert('Debe de ingresar el correo Electronico ');
      return;
    }
    
    validar_email(email);

      var asunto = document.getElementById('asunto').value;
      if (asunto.length < 10) {
        alert('El Asunto del mensaje debe de ser mayor a 10 caracteres. ');
        return;
      }
      var selecttipo = document.getElementById('tipo');
      //validacion select
       if (selecttipo.value === null || selecttipo.value === '0') {
        resultado = false;
        alert("Debe seleccionar el tipo de empresa", selecttipo);
        return;
    }
     
      var mensaje = document.getElementById('mensaje').value;
      if (mensaje.length < 30) {
        alert('El mensaje debe de contener al menos 30 caracteres para poder ser enviado. ');
        return;
      }
      


   
    this.submit();
  }
  function validar_email( email ) 
{
    re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(!re.exec(email)){
		alert('email no valido');
	}
	else {
	}
}