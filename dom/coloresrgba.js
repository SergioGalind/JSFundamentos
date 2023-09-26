const body = document.querySelector('body');
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const transparent = document.querySelector('#transparent');
const btnColor = document.querySelector('#btnColor');

function setColor(){
    // rgb(0, 255, 25)
    // rgba(0, 255, 34, 0.5)
    const redVal = red.value;
    const greenVal = green.value;
    const blueVal = blue.value;
    const transparentVal = transparent.value/100;
    const rgbaColor = `rgb(${ redVal }, ${ greenVal }, ${ blueVal }, ${ transparentVal})`;
    body.style.background = rgbaColor
}

setColor(); 
btnColor.addEventListener('click', setColor);

red.addEventListener('input', setColor);
green.addEventListener('input', setColor);
blue.addEventListener('input', setColor);
transparent.addEventListener('input', setColor);