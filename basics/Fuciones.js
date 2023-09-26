// Funciones con Java Script 

/*
functipon nombre (params){
    body function 
}
*/
/* 
const nombre = function(params ){
    body function
}
*/
function saluda (){
    console.log ('Hello');

}
saluda();
// funcion con parametros sin retorno 
const saludaA = function (name){
    console.log = function(name ){
        console.log (`Hola ${ name  }`);
        
    }
}
saludaA('Batman');

// Funcion com¿n parametros de retorno
const duplica = function(num){
    return num* 2;
}
const doble = duplica(26);
console.log(doble);


// Function Arrow


const getFullName = (firstName, lastName )=> {
    return firstName + ' ' + lastName;
}

const nombre = getFullName(' Peter ', 'Parker');
console.log (nombre);



const minusculas =(word) => {
    return word.toLowerCase();
}
console.log (minusculas('HELLO'));
const mayusculas = word =>{
    return word.toUpperCase();
}
 
console.log (mayusculas('Hello '));

const cuadrado=num => num* num;
console.log (cuadrado (25));

