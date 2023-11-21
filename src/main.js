class Aluno {
    constructor (nomeDoAluno, notaDoAluno){
        this.nome = nomeDoAluno;
        this.nota = notaDoAluno;
    }
}

const aluno1 = new Aluno('João', 5);
const aluno2 = new Aluno('Maria', 8);
const aluno3 = new Aluno('Pedro', 6);

const alunos = [aluno1, aluno2, aluno3];  //ARRAY DE OBJETOS
console.log(aluno1);
console.log(aluno2);
console.log(aluno3);

console.log(alunos);

// const aprovados = alunos.map((alunoAtual) => {
//     if(alunoAtual.nota >= 6){
//         return alunoAtual;
//     }
// })

const resultadoFinal = alunos.reduce((acumulador, itemAtual) => { //Função para retornar APENAS alunos com nota >= 6
    if(itemAtual.nota >= 6){
        acumulador += `Nome: ${itemAtual.nome}, Nota:${itemAtual.nota}; `;
    }
    return acumulador;
}, '');

// console.log(aprovados);

// console.log(resultadoFinal);

console.log(resultadoFinal);