const inputTarea = document.querySelector('#inputTarea');
const tareas = document.querySelector('#tareas');
const btnTarea = document.querySelector('#btnTarea');

function createAlert(message){
    /*
    <div class="alert alert-primary" role="alert">
    A simple primary alert-check it out!
    </div>
    */
   const alerta = document.createElement('div');
   alerta.classList.add ('alert');
   alerta.classList.add ('alert-primary');
   alerta.setAttribute('role', 'alert');
   let buttons ='<div>';
   buttons += `<button class="btn">Red</button>`;
   buttons += `<button class="btn">Yellow</button>`;
   buttons += `<button class="btn">Green</button>`;
   buttons += `<button class="btn">x</button></div>`;
   alerta.innerHTML = `<p>${ message }</p>${ buttons }`;
   return alerta; 
}

function addTarea(){
    const data = inputTarea.value; 
    if(data){
        tareas.appendChild(createAlert(data));
        inputTarea.value = '';
    }
    
}

function getButton(e){
    if(e.target.classList.contains('btn')) {
        const alertActual = e.target.parentElement.parentElement;
        const action = e.target.innerText;
        switch(action){
            case 'Red': 
                alertActual.classList = [];
                alertActual.classList.add('alert', 'alert-danger');
                break;
            case 'Yellow': 
                alertActual.classList = [];
                alertActual.classList.add('alert', 'alert-warning');
                break;
            case 'Green': 
                alertActual.classList = [];
                alertActual.classList.add('alert', 'alert-success');
                break;
            case 'X':
                alertActual.remove();
                break;
        }
    } 
}

btnTarea.addEventListener('click', addTarea);
tareas.addEventListener('click', getButton);