// As props são umas das partes mais importantes de um componente. São por elas que passamos os valores para o componente, e é como o rotna reutulizável em diferentes contextos. Elas são como os parâmetros de uma função. Observe o exemplo abaixo de como seria uma função que retornaria a mesma mensagem que o componente Greeting renderiza:

const greeting = (name) => `Hello ${name}`;
console.log(greeting('Samuel'));

// Assim como podemos ter vários parâmetros em um função, conseguimos também passar inúmeras propriedades para o componente por meio das props. Adicionemos o sobrenome da pessoa à função e ao componente.

const fullName = (first, last) => `Hello, ${first} ${last}`;
console.log(fullName('Victor', 'Schmoegel'));

// Ao componente fullName

class FullName extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.first} {this.props.last}</h1>
    );
  }
}

export default FullName;

// Seguindo as boas práticas nas suas aplicações, você pode desestruturar as props. Para isso, basta refatorar o código anterior, no qual o componente FullName ficará da seguinte forma:

class FullName extends React.Component {
  render() { 
      const { first, last } = this.props;
      return <h1>Hello, {first} {last}</h1>;
  }
}

// export default FullName;

// Agora chamamos dentro do componente App.

import React from 'react';
import Greeting from './Greeting';

class App extends React.Component {
  render() {
    return (
      <main>
        <Greeting first="Samuel" last="Silva" />
      </main>
    );
  }
}

// export default App;