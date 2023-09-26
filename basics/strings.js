// Strings en Javascript

let miString = "Este eS un TeXto" + 'de PruEba';
console.log(miString);
console.log(miString.charAt(5));
console.log(miString.endsWith('a'));
console.log(miString.length);
console.log(miString.repeat(2));
console.log(miString.toLowerCase());
console.log(miString.toUpperCase());

console.log("I'm SERGIO");

console.log('i\'m Sergio');

// Strings Multilinea
const menu=`
1 opcion 1
2 opcion 2
3 opcion 3
`;
console.log(menu);


// Strings Templates
// placeholder ${}

const name = 'Peter';
const superhero = 'Spiderman';
const age =20;

console.log("Soy"+ name + "soy" + superhero + 'y tengo' + age + 'años');
console.log(`Soy ${ name } soy { superhero } y tengo ${ age } años`);