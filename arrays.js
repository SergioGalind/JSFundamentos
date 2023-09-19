// Arrays con java Script
// coleccion ordenada de datos

const miArray = new Array('1', 2, 3);
const otherArray =[1, 2, true, 1.4];
console.log(miArray);
console.log(otherArray);
console.log(miArray[0]);
console.log(otherArray[1]);
console.log(miArray[1]);
console.log(otherArray[2]);

otherArray[1]='One';
otherArray[2]='three';
console.log(otherArray);

// podemos insertar elementos
// push() para insertar al final
// unshift() para insertar al inicio
//pop () para extraer del final 
// shift() para extraer del inicio

const pila =[]; //ultimo en entrar es primero en salir 
pila.push (1);
pila.push (2);
pila.push (3);
pila.push (4);
console.log(pila);
pila.pop();
pila.pop();
console.log(pila);

const cola =[]; // primero en estrar primero en salir
cola.push(1);
cola.push(2);
cola.push(3);
cola.push(4);
console.log(cola);
cola.shift();
cola.shift();
console.log(cola);