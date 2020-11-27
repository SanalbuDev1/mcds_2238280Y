function operacionesRandom() {
    var aleatorio = alea();
    var resultado = (aleatorio < 4) ? console.log(document.getElementById("num1").value - document.getElementById("num2").value) : console.log(document.getElementById("num1").value * document.getElementById("num2").value);;
    console.log(resultado);
}

var alea = function aleatorio() {
    const MAX = 10;
    const MIN = 0;
    return Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
}