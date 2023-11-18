function Cachorro(nome) {     //Classe de uma abstração criada
    this.nome = nome;         //já é uma função construtora
    this.latir = function() {
        console.log(this.nome + ': Au Au');
    }
}

function Canil(nome, idade) {                    //PRIMEIRA CLASSE HERDEIRA
    this.idade = idade;

    Cachorro.call(this, nome);
}


function Adocao(nome, porte, humor) {                     //SEGUNDA CLASSE HERDEIRA
    this.porte = porte;
    this.humor = humor;

    Cachorro.call(this, nome);
}

const cachorro1 = new Cachorro("Fred", 5, "pequeno", "manso");          //INSTÂNCIAS do objeto cachorro
const cachorro2 = new Cachorro("Leto", 9, "medio", "bravo");
const cachorro3 = new Cachorro("Zeus", 3, "grande", "equilibrado");
const dog1 = new Adocao("Ped", "grande", "equilibrado");
const dog2 = new Canil("Billy", 3)

console.log(dog2);
dog2.latir();


