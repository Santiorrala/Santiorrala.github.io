document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("masinfo").addEventListener('submit', validarFormulario);
  });
  function validarFormulario(evento) {
    evento.preventDefault();
    ///////////////////////////////////////////////////////////////////
    var nombres = document.getElementById('nombres').value;
    if(nombres.length < 3) {
      alert('ERROR, Ingrese sus nombres completos');
      return;
    }
    ///////////////////////////////////////////////////////////////////



    var apellidos = document.getElementById('apellidos').value;
    if(apellidos.length < 3) {
      alert('ERROR, Ingrese sus apellidos completos');
      return;
    }
    ///////////////////////////////////////////////////////////////////

    var selectsexo = document.getElementById("sexo");
    if (selectsexo.value === null || selectsexo.value === '0') {
        resultado = false;
        alert("Debe seleccionar su sexo", selectsexo);
        return;
      }

    ///////////////////////////////////////////////////////////////////
      var edad = document.getElementById('edad').value;
      if (edad.length <2) {
        alert('Debe ser mayor de edad');
        return;
      }
    ///////////////////////////////////////////////////////////////////
    var selecttipo = document.getElementById("tipo");
    if (selecttipo.value === null || selecttipo.value === '0') {
        resultado = false;
        alert("Debe seleccionar cual es su estado civil", selecttipo);
        return;
      }
      ///////////////////////////////////////////////////////////////////
      var comentario = document.getElementById('comentario').value;
      if (comentario.length <8) {
        alert('El mensaje debe contener al menos 2 palabras ');
        return;
      }
      ///////////////////////////////////////////////////////////////////
      var celular = document.getElementById('celular').value;
      if (celular.length < 9) {
        alert('ERROR, debe ingresar su numero de telefono');
        return;
      }
      ///////////////////////////////////////////////////////////////////
    var email = document.getElementById('email').value;
    if (email.length === 0) {
      alert('Debe de ingresar el correo Electronico ');
      return;
    }
    validar_email(email);
    ///////////////////////////////////////////////////////////////////
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

/*var form = document.getElementById("formmasinfo");
form.addEventListener('submit', validar);

let cont=0;
function validar(event) {
     // variable para retornar
    var valido = true;
     // obtencion de los elementos a validar
    var txtNombres = document.getElementById("nombres");//document.querySelector("input[name='nombres']"); // reotrna el primer input que tenga name ='nombres'
    var txtApellidos = document.getElementById("apellidos");
    var txtTelefono = document.getElementById("telefono");
    var selectEstado = document.getElementById("civil");
    var radiosGenero = document.getElementsByName("genero");//retorna un arreglo;
    var radio1 = document.getElementById("g1");
    var chkSuscrip = document.getElementById("suscripcion1");
    var txtfecha = document.getElementById("fecha");
    var txtemail = document.getElementById("correo").value;
    var checkboxsSuscripcion = document.getElementsByClassName("sus");// retorna un arreglo
  //  var checkboxsSuscripcion = document.querySelectorAll(".sus");// retorna un arreglo

}
  //  var parrafos = document.getElementsByTagName("p");

    var letra = /^[a-z ,.'-]+$/i;// letrasyespacio   ///^[A-Z]+$/i;// solo letras
    var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var telefonoreg = /^[0-9]{10}$/g; // para validar datos que deban tener 10 numeros

    limpiarMensajes();

    //validacion para nombres
    if (txtNombres.value === "") {
        valido = false;
        mensaje("Escribir el nombre", txtNombres);
    } else if (!letra.test(txtNombres.value)) { 
        valido = false;
        mensaje("Este campo solo debe contener letras", txtNombres);
    } else if (txtNombres.value.length > 20) {
        valido = false;
        mensaje("Nombre maximo 20 caracteres", txtNombres);
    }

    // lo mismo para apellidos
    if (txtApellidos.value === "") {
        valido = false;
        mensaje("Escribir el apellido", txtApellidos);
    } else if (!letra.test(txtApellidos.value)) { 
        valido = false;
        mensaje("Este campo solo debe contener letras", txtApellidos);
    } else if (txtApellidos.value.length > 20) {
        valido = false;
        mensaje("Nombre maximo 20 caracteres", txtApellidos);
    }
    //validacion telefono
    if (txtTelefono.value === "") {
        valido = false;
        mensaje("Telefono es requerido", txtTelefono);
    } else if (!telefonoreg.test(txtTelefono.value)) {
        valido = false;
        mensaje("Telefono debe ser de 10 digitos", txtTelefono);
    }

    //validacion email
    if (txtemail.value === 0) {
        valido = true;
        mensaje("Email es requerido", txtemail);
    } else if (!correo.test(txtemail.value)) {
        valido = false;
        mensaje("Email no es correcto", txtemail);
    }      

    //validacion select
    if (selectEstado.value === null || selectEstado.value === '0') {
        valido = false;
        mensaje("Elija cual es su estado civil", selectEstado);
    }

    //validacion radio button
    var sel = false;
    for (let i = 0; i < radiosGenero.length; i++) {
        if (radiosGenero[i].checked) {
            sel = true;
         //  let res=radiosGenero[i].value;
          break;
        }
    }
    if (!sel) {
        valido = false;
        mensaje("Debe seleccionar un genero", radiosGenero[0]);
    }

   // validacion de un checkbox
   if(!chkSuscrip.checked){
     valido=false;
     mensaje("Debe seleccionar una suscripcion", chkSuscrip);
     }
    if (!sel) {
        valido = false;
        mensaje("Debe seleccionar una suscripcion", checkboxsSuscripcion[0]);
    }

    // validacion de fecha
    var dato=  txtfecha.value;
    var fechaN = new Date(dato);
    var anioN=fechaN.getFullYear();
    
    var fechaActual = new Date();// fecha actual
    var anioA =fechaActual.getFullYear();    
    if(fechaN > fechaActual){
        valido = false;
        mensaje("Fecha no puede ser superior a la actual",txtfecha);
   }else if(anioN < 1930){
        valido = false;
        mensaje("Anio de nacimiento no puede ser menor a 1930",txtfecha);
   }else if((anioA - anioN) <18){
       valido = false;
        mensaje("debe ser mayor de 18 años",txtfecha);
   }
  
   if(!valido){
        event.preventDefault();  // detener el evento  //stop form from submitting
    }

//    return valido;

function mensaje(cadenaMensaje, elemento) {
    elemento.focus();
    var nodoPadre = elemento.parentNode;
    var nodoMensaje = document.createElement("span");
    nodoMensaje.textContent = cadenaMensaje;
   nodoMensaje.setAttribute("class", "mensajeError");
   nodoPadre.appendChild(nodoMensaje);

}

function limpiarMensajes() {
    var mensajes = document.querySelectorAll(".mensajeError");
    for (let i = 0; i < mensajes.length; i++) {
        mensajes[i].remove();// remueve o elimina un elemento de mi doc html
    }

}*/