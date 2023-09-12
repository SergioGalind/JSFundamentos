const respuesta = document.getElementById('respuesta');

function eightball(){
    const opcion = Math.ceil(Math.random() * 8);
    let resp; 
    switch(opcion){
        case 1: 
            resp = '¡Todo saldrá bien!';
            break;
        case 2: 
            resp = 'Ganarás $100 😎';
            break;
        case 3: 
            resp = 'Perderás $50 😯';
            break;
        case 4: 
            resp = 'Sigue intentando weon jajaja';
            break;
        case 5: 
            resp = '¡Tendrás mucho exito parce! 👍👍';
            break;
        case 6: 
            resp = 'Sigue a sunset_blessings en Instagram';
            break;
        case 7: 
            resp = '¡VAMOS A MORENAAAA!🥴';
            break;
        default: 
        resp = 'No lo sé'
    }
    respuesta.innerHTML = resp;
}