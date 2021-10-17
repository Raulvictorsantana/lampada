var ligada = document.getElementById('ligada');
var desligado = document.getElementById ("desligado");
var lampa = document.getElementById ("lampa");

function fail () {
    return lampa.src.indexof ('quebrada') > -1
}
 
function on(){

    lampa.src = "imagem/acessa.jpg"

}
ligada.addEventListener('click', on );

function off(){

    lampa.src = "imagem/apagada.jpg";

}
desligado.addEventListener('click', off);


function qb () {
    lampa.src = "imagem/quebrada.jpg";

}
lampa.addEventListener('dblclick', qb);

lampa.addEventListener('mousemove', on);

lampa.addEventListener('mouseleave', off);

