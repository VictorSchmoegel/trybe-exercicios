// Sempre que precisar armazenar várias informações, o array é uma boa alternativa e uma ferramenta muito útil. Por meio do .length, é possível ter acesso à quantidade de elementos contidos nele. Mas como é possível acessar essas informações? Veja o exemplo a seguir.

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);


let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);

// Como é possível adicionar itens em um array e removê-los? Veja e pratique com o exemplo a seguir.

let tasksListAdd = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksListAdd.push('Fazer exercícios da Trybe');
tasksListAdd.push('treinando');
tasksListAdd.unshift('add no inicio')
console.log(tasksListAdd);

// Removendo itens do array

let tasksListRmv = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksListRmv.pop(); // Remove o ultimo item do array
tasksListRmv.shift(); // Removo o primeiro item do array
console.log(tasksListRmv);

// Procurando um índice dentro do array

let tasksList2 = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask = tasksList2.indexOf('Reunião');
console.log(indexOfTask);

// Obtenha o valor “Serviços” do array menu:

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

// Procure o índice do valor “Portfólio” do array menu:

let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu2.indexOf('Portfólio');

console.log(indexOfPortfolio);

// Adicione o valor “Contato” no final do array menu.

let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu3.push('Contato')

console.log(menu3);