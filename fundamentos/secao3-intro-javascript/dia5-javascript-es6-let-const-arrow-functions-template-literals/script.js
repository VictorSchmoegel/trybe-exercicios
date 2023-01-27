let pessoa = {
    nome: 'Márcia',
    sobrenome: "silva",
    anoNascimento: 1979,
}
console.log(`Paciente: ${pessoa.nome} ${pessoa.sobrenome}\nIdade: ${2022 - pessoa.anoNascimento} anos de idade`);


//function without arrow
function printNames() {
    const myName = 'Lucas';
    return myName;
  };
  
  console.log(printNames());


//Arrow function
  let printName = () => {
    const myName = 'Lucas';
    return myName;
  };
 
  console.log(printName());

const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));

function wordCount (frase) {
    return frase.split(' ').length;
}
console.log(wordCount('counting the words'));

let wordCounts = (frases) => frases.split(' ').length;
console.log(wordCounts('contondando as plavras magicas'))


/*function objpessoa (nome, idade) {
    return {
        nome: nome,
        idade: idade
    }
}
console.log(objpessoa('Victor', 26 ));*/


let objetoPessoa = (nome, idade) => ({nome: nome, idade: idade})
console.log(objetoPessoa('Victor', 26))


let idade = 16;
if (idade >= 18) {
    console.log('Pode dirigir')
} else {
    console.log('não pode dirigir')
}

const vericaIdade = (idade >= 18) ? 'Pode dirigir' : 'Não pode dirigir';

console.log(vericaIdade);


const nome = "Gus";
const modulos = [1];
const empresa = {
  nome: "Trybe",
  nota: 8001,
};

modulos.push(3);
nome = "Batman";
empresa.nota = 8002;

