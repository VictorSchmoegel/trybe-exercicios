// Esse método é utilizado para copiar os valores de todas as propriedades de um ou mais objetos para um objeto destino.

const person = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20,
};
  
  const info = {
    age: 23,
    job: 'engenheiro',
};
  
  const family = {
    children: ['Maria', 'João'],
    wife: 'Ana',
};
  
Object.assign(person, info, family)
console.log(person)