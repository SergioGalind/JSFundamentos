// Variables
const catalogo = document.querySelector('#lista-cursos');

const carrito =[];
function getProduct(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const item={}
        const cardParent =e.target.parentElement;
        item.id = e.target.getAttribute('data-id');
        item.name = cardParent.querySelector('h4').innerText;
        item.price = cardParent.querySelector('p span').innerText;
        item.image =cardParent.parentElement.querySelector('img').src;
        item.cantity=1;
        carrito.push(item);

    }
}

catalogo.addEventListener('click',getProduct);