// funciones de orden superior 






const myFunction =()=>{
    console.log ("Ejecuta mi funcion");
}
myFunction();
const sameFunction = myFunction;
sameFunction();

const otherSameFunction = myFunction;
otherSameFunction();

const funOne = () => {
    console.log("Ejecuta Funcion One");
}
const funTwo = (username) => {
    console.log("Ejecuta Funcion Two");
    console.log("Hola " + username);
}

const funThree =(otherFunction)=>{
console.log('inicia sesion 3');
otherFunction();
console.log('Termina funcion 3');
}

funOne();
funTwo('Erick');
funTwo('Clark Kent');
funThree(funOne);
funThree(()=> console.log('Soy un arrow function'));