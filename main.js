const form = document.getElementById('form-comparacao');

function comparaNumeros(a,b){
    return b>a;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const numeroA = document.getElementById('number-a');
    const numeroB = document.getElementById('number-b');
    const mensagemBMaior = `O número B É maior que A`;
    const mensagemAMaior = `O número B NÃO É maior que A`;


    const resultado = document.querySelector('.result');
    if(comparaNumeros(numeroA.value,numeroB.value)){        
        resultado.innerHTML = mensagemBMaior;
        resultado.style.display = 'block';
    }else {
        resultado.innerHTML = mensagemAMaior;
        resultado.style.display = 'block';
    }
})
