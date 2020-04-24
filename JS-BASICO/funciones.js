// Funcion Declarativas

function miFuncion(){
    return 4;
}

// Funcion de Expresión

var miFunciona = function(nombre){
    console.log(`Hola soy una funcion Expresiva y me llamo ${nombre}`);
};

function nombres(nombre){
    return `Bienvenido ${nombre}`;
}
console.log(nombres("hose"));

miFunciona("Diego");

//Coerción

var a = 4 + "7";
console.log(typeof a);

var b = 4 * "7";
console.log(typeof b);

var c = 20;

var d = String(c); //Obligo a que la variable numerica sea un string
console.log(typeof(d));


var numero = 1;

var resultado = numero === 1 ? "Si soy un uno" : "No, no soy uno";
/** 
 * EL ? es lo mismo que poner if
 * el : es el else
*/
console.log(resultado);