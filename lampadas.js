var ligada = document.getElementById('ligada');
var desligado = document.getElementById ("desligado");
var lampa = document.getElementById ("lampa");



 
function on(){

    lampa.src = "imagem/acessa.jpg"
    document.body.style.backgroundColor = ' rgb(187, 186, 238)';

}
ligada.addEventListener('click', on );

function off(){

    lampa.src = "imagem/apagada.jpg";
    document.body.style.backgroundColor = 'white';
    

}
desligado.addEventListener('click', off);


function qb () {
    lampa.src = "imagem/quebrada.jpg";

}


lampa.addEventListener('dblclick', qb);

lampa.addEventListener('mouseover', on);

lampa.addEventListener('mouseleave', off);


