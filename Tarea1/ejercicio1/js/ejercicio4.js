var alea = function aleatorio() {
    const MAX = 12;
    const MIN = 1;
    return Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
}

function meses() {
    let resultado = alea();
    var numberLiteral = resultado == 1 ? 'enero si' :
        resultado == 3 ? 'marzo si' :
        resultado == 5 ? 'mayo si' :
        resultado == 7 ? 'julio si' :
        resultado == 8 ? 'agosto si' :
        resultado == 10 ? 'octubre si' :
        resultado == 12 ? 'diciembre si' :
        'No tiene 31';
    console.log(numberLiteral);
}