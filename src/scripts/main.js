document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('somador').addEventListener('submit', function(evento){
        evento.preventDefault();
        let primeiroNumero = document.getElementById('primeiro').value;
        primeiroNumero = parseInt(primeiroNumero);
        let segundoNumero = document.getElementById('segundo').value;
        segundoNumero = parseInt(segundoNumero);

        document.getElementById('resultado').innerText = primeiroNumero+segundoNumero;

        
    })
})