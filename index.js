let jugador = 0;
let pc = 2;
jugador = prompt("Elige : 1 'Piedra', 2 'Papel', 3 'Tijera' ");
alert("Elegiste " + jugador)


function aleatorio(){
    return Math.floor(Math.random() * + max -min + 1);
}

function eleccion(jugada){
    let resultado;
    if(jugada == 1){
        resultado = "PIEDRA";
    }else if(jugada == 2){
        resultado = "PAPEL";
    }else if(jugada == 3){
        resultado = "TIJERA";
    }else{
        resultado = "Wrong :(";
    }
    return resultado;
}
ele = prompt('Elige')
alert('---> '+eleccion(ele))