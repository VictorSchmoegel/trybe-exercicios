// Desenvolva cada exercício a seguir com o uso de funções.

// Considere a variável saldo, que representa a quantia em conta de determinada(o) cliente do TrybeBank e escreva quatro programas que:

let saldo = 100;

// 1 - Adicione um valor ao saldo.

const somaValor = (valor) => valor + saldo;

// 2 - Subtraia um valor do saldo.

const subValor = (valor) => valor - saldo;

// 3 - Multiplique o valor do saldo por uma taxa.

const multvalor = (valor) => valor * saldo;

// 4 - Divida o valor do saldo.

const divValor = (valor) => saldo / valor;

console.log(somaValor(150));
console.log(subValor(634));
console.log(multvalor(12));
console.log(divValor(2));

// Desenvolva cada exercício a seguir com o uso de funções.

// Faça um programa para adicionar clientes ao array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro caso o parâmetro não seja do tipo string.

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

const addClientes = (param) => (typeof param === 'string') ? clientesTrybeBank.push(param) : 'O parametro deve ser uma string';

console.log(addClientes('paulo'));
console.log(clientesTrybeBank);

// Agora iremos escrever um programa que irá excluir um(a) cliente já existente do array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro, caso o parâmetro não seja do tipo string e caso o(a) cliente não exista dentro do array.

let clientesTrybeBank1 = ['Ada', 'John', 'Gus'];

const excludeClient = (param) => {
  if (typeof param === 'string') {
    let clienteEncontrado = false;
    for (index = 0; index < clientesTrybeBank1.length; index += 1) {
      if (param === clientesTrybeBank1[index]) {
        clientesTrybeBank1.splice(index, 1);
        clienteEncontrado = true;
        return 'Cliente excluído com sucesso';
      }
    }
    if (clienteEncontrado === false) {
      return 'Cliente não encontrado'
    }
  } else {
    return 'O parametro deve ser uma string';
  }
};

console.log(excludeClient(true));
console.log(excludeClient('Cléber'));
console.log(excludeClient('Ada'));
console.log(clientesTrybeBank1);

// Refatore a função excludeClient para diminuir sua complexidade e quebrá-la em funções menores.

let clientesTrybeBank2 = ['Ada', 'John', 'Gus'];

const isString = (param) => {
  if (typeof param !== 'string') {
    'o paramentro deve ser uma string'
  } else {
    return true;
  }
};

const clientInArray = (param) => {
  for (let index = 0; index < clientesTrybeBank2.length; index += 1) {
    if (param === clientesTrybeBank2[index]) {
      return true;
    } else {
      return false;
    }
  }
};

const rmvClient = (param) => {
  let valid = isString(param);
  if (valid !== true){
    return valid;
  }
  let index = clientInArray(param);
  if (index = false) {
    return 'Cliente não encontrado'
  }
  clientesTrybeBank2.splice(index, 1);
  return 'Cliente excluídos com sucesso';
};

console.log(rmvClient(true));
console.log(rmvClient('Cléber'));
console.log(rmvClient('Ada'));
console.log(clientesTrybeBank2);

