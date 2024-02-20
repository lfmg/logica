// EJERCICIO 1 ==============================================
// Desarrollar un código para validar un formulario de contacto utilizando el evento submit y las expresiones regulares que permitan el ingreso de caracteres desde la “A- a” hasta la “Z-z” mediante el método test() de JavaScript, mostrando un mensaje de error y/o éxito cuando corresponda. Es decir, el usuario deberá obligatoriamente ingresar datos en el formulario y que estos solo sean caracteres alfabéticos de la “a” hasta la “z” para poder enviar la información. 

let form = document.getElementById( "formulario" );

form.addEventListener( "submit", function ( event ) {
     event.preventDefault(); 
     limpiarErrores();

     let textNombre = document.querySelector("#nombre").value ;
     let textAsunto = document.querySelector("#asunto").value;
     let textMensaje= document.querySelector("#mensaje").value;
     let resultado = validar(textNombre, textAsunto, textMensaje);

     if(resultado == true) { exito(); }; 
     }
);

function limpiarErrores() { 
   //  document.querySelector(".result").innerHTML = ""; 
     document.querySelector(".errorNombre").innerHTML = ""; 
     document.querySelector(".errorAsunto").innerHTML = ""; 
     document.querySelector(".errorMensaje").innerHTML = "";
};

function exito() {
     document.querySelector(".result").innerHTML = "Formulario pasó la validación";
};

function validar(nombre, asunto, mensaje) {

     let pasamosLaValidacion = true;

     let validacionNombre = /[a-zA-Z]/gim;
     if (validacionNombre.test(nombre) == false) {
     document.querySelector(".errorNombre").innerHTML = "Ingrese un nombre válido."
     pasamosLaValidacion = false; };
     
     let validacionAsunto = /[a-zA-Z]/gim;
     if (validacionAsunto.test(asunto) == false) {
     document.querySelector(".errorAsunto").innerHTML = "Ingrese un asunto válido."
     pasamosLaValidacion = false; };
     
     let validaciónMensaje = /[a-zA-Z]/gim;
     if (validaciónMensaje.test(mensaje) == false ) {
     document.querySelector(".errorMensaje").innerHTML = "Ingrese un mensaje válido."
     pasamosLaValidacion = false; };
     
     return pasamosLaValidacion;
};
     

// EJERCICIO 2 ==============================================
// A partir de un selector de colores, cambia el color del cuadro principal al hacer click sobre uno de los colores. Ver las siguientes imágenes (3 Puntos):

var bt1 = document.getElementById("btn-1");
bt1.addEventListener('click',cambiaColor1);
function cambiaColor1(){ document.querySelector("#caja").style.background='#e53e3e'; };

var bt2 = document.getElementById("btn-2");
bt2.addEventListener('click',cambiaColor2);
function cambiaColor2(){ document.querySelector("#caja").style.background='#dd6b20'; };

var bt3 = document.getElementById("btn-3");
bt3.addEventListener('click',cambiaColor3);
function cambiaColor3(){ document.querySelector("#caja").style.background='#faf089'; };

var bt4 = document.getElementById("btn-4");
bt4.addEventListener('click',cambiaColor4);
function cambiaColor4(){ document.querySelector("#caja").style.background='#48bb78'; };

var bt5 = document.getElementById("btn-5");
bt5.addEventListener('click',cambiaColor5);
function cambiaColor5(){ document.querySelector("#caja").style.background='#81e6d9'; };

var bt6 = document.getElementById("btn-6");
bt6.addEventListener('click',cambiaColor6);
function cambiaColor6(){ document.querySelector("#caja").style.background='#d53f8c'; };

// EJERCICIO 3 ==============================================
// Dar la funcionalidad de sumar y restar a la calculadora, mostrando el resultado en el elemento con clase resultado. Si el resultado de la resta entrega un número negativo debes mostrar un 0 (4 Puntos).

var valor1 = parseInt( document.getElementById("valor1").value );
var valor2 = parseInt( document.getElementById("valor2").value );

var btnSumar = document.getElementById("btn-sumar");
btnSumar.addEventListener('click', sumar );
function sumar (){ 
     resultado = valor1 + valor2;   
     document.getElementById("resultado").innerHTML = resultado;
};

var btnRestar = document.getElementById("btn-restar");
btnRestar.addEventListener('click', restar );
function restar (){ 
     resultado = valor1 - valor2;   
     if (resultado < 0 ) { resultado = 0; }
     document.getElementById("resultado").innerHTML = resultado;
};


