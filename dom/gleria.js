const containerGal = document.querySelector ('.container');
const imgeCon =document.querySelector ('.modal-body img');
function getImage(e){
    const image = e.target.src;
    imgeCon.src = image;
}
 
containerGal.addEventListener('click', getImage);