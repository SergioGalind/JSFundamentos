

for(let i = 0; i<3; i++);{
console.log("indice " +1);
}

//while
let i=0;
while(i<3){
    console.log("indice "+1);
    i++;
}

//do while
i=0;
do{
    console.log('indice' +1);

}while(i===0);

// recorriendoobjetos
const letras ='abcd';
const numeros =(3, 1, 5, 2);

for(let i=0; i< letras.length; i++);{
    console.log(letras[i]);
}

for(let i=0; i< letras.length; i++);{
    console.log(numeros[i]);
}

//for of
console.log('for of\n');
for(const letra of letras){
    console.log(letra);
}
for(const numero of numeros ){
    console.log(numero);
}