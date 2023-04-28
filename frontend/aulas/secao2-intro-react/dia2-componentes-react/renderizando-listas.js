// Imagine que temos a seguinte lista a ser renderizada de maneira dinâmica:

// const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];

// O primeiro passo é criar uma coleção de elementos. Para isso, iteramos sobre shoppingList com uma HOF que retorne, em um novo array, cada item da lista envolvido por um elemento <li>. A seguir, atribuímos o array resultante para a variável items.

const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];

const items = shoppingList.map((item) => {
  console.log('item ', item);
  return (<li>{item}</li>);
});

import React from 'react';

class App extends React.Component {
  render() {
    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
    const items = shoppingList.map((item, index) => {
      console.log('item ', item);
      return (<li key={ index }>{item}</li>);
    });

    return (
      <div>
        <h2>Lista de compras</h2>
        <ul>
          { items }
        </ul>
      </div>
    );
  }
}

export default App;

