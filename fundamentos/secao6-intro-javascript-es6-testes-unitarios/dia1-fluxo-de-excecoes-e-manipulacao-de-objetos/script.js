/* ==================== Exemplo 1 Throw e Try/Catch ====================== */
console.log('\n-------- Exemplo 1 Throw e Try/Catch --------\n')

// Criando função de soma com dois números
const sum = (value1, value2) => {
  return value1 + value2;
};

console.log(sum(2, 3));

// Criando função de soma com um número e uma string
const sum2 = (value1, value2) => {
  return value1 + value2;
};

console.log(sum2(2, '3'));

// Adicionando uma condicional 'if' para que os valores sejam somente números
const sum3 = (value1, value2) => {
  if(typeof value1 !== 'number' || typeof value2 !== 'number') {
    return 'Os valores devem ser numéricos';
  }
  return value1 + value2;
};

console.log(sum3(2, '3'));

// Criando um fluxo de exceção com throw e new Error
const sum4 = (value1, value2) => {
  if(typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
  return value1 + value2;
};

console.log(sum4(2, '3'));

// Criando uma função utiliando o Try/Catch
const verifyIsNumber = (value1, value2) => {
  if(typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
  return value1 + value2;
};

const sum5 = (value1, value2) => {
  // o `try` vai executar a função verifyNumber e retornar a soma caso os parâmetros sejam números
  try {
    verifyIsNumber(value1, value2);
    return value1 + value2;
  // se o bloco `try` apresentar erro, o `catch` vai capturar esse erro e retornar a mensagem já criada através da propriedade `.message` nativa do objeto Error.  
  } catch (error) {
    return error.message;
  }
};

console.log(sum5(2, '3'));