/* =================== Exemplo 2 Adicionando novas Chaves ===================== */
console.log('\n------- Exemplo 2 Adicionando novas Chaves -------\n')

// Adicionando a propriedade 'lastName' a um objeto diretamento no objeto
const customer = {
    firstName: 'Roberto',
    lastname: 'Faria', // Propriedade adicionada diretamente
    age: 22,
    job: 'Teacher',
};

// Adicionando uma proriedade a dois objetos diferentes

const customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
};

customer1.lastName = 'Faria';
console.log(customer1);
  
const customer2 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
};

customer2.lastName = 'Silva';
console.log(customer2);

/* ================== Exemplo 3 Criando novas propriedades ==================== */
console.log('\n------ Exemplo 3 Criando novas propriedades ------\n')

// Criando novas propriedades para um objeto
const customer3 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
};

// cria a variável que salva o nome da chave
let newKey = 'lastName';

// cria a variável que salva o valor da chave
const lastName = 'Ferreira';

// cria a nova chave com o valor da variável lastName
customer3[newKey] = lastName;

// Ciando função para adicionar essas novas propriedades ao objeto
const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
    objeto[novaPropriedade] = valor;
};

adicionaPropriedade(customer3, newKey, lastName);
console.log(customer3);

newKey = 'fullName'
const fullName = `${customer3.firstName} ${customer3.lastName}`;

adicionaPropriedade(customer3, newKey, fullName);
console.log(customer3);

/* ================= Exemplo 4 Praticando com minhas infos =================== */
console.log('\n----- Exemplo 4 Praticando com minhas infos -----\n')

const eu = {
    firstName: 'Victor',
    lastName: 'Schmoegel'
}

console.log(eu);

let newKeyAge = 'Age';
const Age = 26;
eu[newKeyAge] = Age;

const adicionandoInfos = (object, newProperty, value) => {
    object[newProperty] = value;
};

adicionandoInfos(eu, newKeyAge, 26);
console.log(eu);

let newKeyTel = 'tel';
const tel = '(61) 98161-2963';
eu[newKeyTel] = tel;

adicionandoInfos(eu, newKeyTel, '(61) 98161-2963');
console.log(eu);

let newKeyEmail = 'Email';
const email = 'victorschmogel@hotmail.com';
eu[newKeyEmail] = email

adicionandoInfos(eu, newKeyEmail, 'victorschmoegel@hotmail.com');
console.log(eu);

let newKeyCidade = 'Cidade';
const cidade = 'Brasília';
eu[newKeyCidade] = cidade;

adicionandoInfos(eu, newKeyCidade, 'Brasília');
console.log(eu);