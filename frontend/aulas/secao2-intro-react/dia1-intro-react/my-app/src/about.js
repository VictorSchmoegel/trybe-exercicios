import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {'Victor Schmoegel'}
        </h1>
        <p>
          {'Sou Victor, tenho 26 anos e estou fazendo o curso de web developer pela Trybe, esse é o meu primeiro dia de React'}
        </p>
        <h2>Minhas Habilidades</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>
    );
  }
}

export default About;