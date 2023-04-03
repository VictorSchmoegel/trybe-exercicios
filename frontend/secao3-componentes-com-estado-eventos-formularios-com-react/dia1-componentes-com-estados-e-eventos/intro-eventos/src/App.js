import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() { // Caso seja utilizada uma rrou function não terá a necessidade de utilizar o bind nem o constructor, podendo o código ser inserido logo antes do render.
    super ()
    this.handleClickOne = this.handleClickOne.bind(this) // para minha função handleClickOne ter acesso ao this
    this.handleClickTwo = this.handleClickTwo.bind(this)
    this.handleClickThree = this.handleClickThree.bind(this)
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0
    }
  }

  handleClickOne = () => {
    const { click1 } = this.state;
    this.setState((estadoAnterior) => ({
      click1: estadoAnterior.numeroDeCliques1 +1
    }), () => {
      console.log(`Botão 1 ${this.getButtonColor(click1)}`);
    });
     
  }
  handleClickTwo = () => {
    const { click2 } = this.state;
    this.setState((estadoAnterior) => ({
      click2: estadoAnterior.numeroDeCliques2 +1
    }), () => {
      console.log(`Botão 1 ${this.getButtonColor(click2)}`);
    });
  }
  handleClickThree = () => {
    const { click3 } = this.state;
    this.setState((estadoAnterior) => ({
      click3: estadoAnterior.numeroDeCliques3 +1
    }), () => {
      console.log(`Botão 1 ${this.getButtonColor(click3)}`);
    });
  }

  getButtonColor = (num) => num % 2 === 0 ? 'green' : 'white';

  render() {
    const { click1, click2, click3 } = this.state
    return (
      <div>
        <button
          onClick={ this.handleClickOne }
          style={ { backgroundColor: this.getButtonColor(click1) } }
        >
          {`Click botão 1: ${click1}`}
        </button>
        <button
          onClick={ this.handleClickTwo }
          style={ { backgroundColor: this.getButtonColor(click2) } }  
        >
          {`Click botão 2: ${click2}`}
        </button>
        <button
          onClick={ this.handleClickThree }
          style={ { backgroundColor: this.getButtonColor(click3) } }  
        >
          {`Click botão 2: ${click3}`}
        </button>
      </div>

    );
  }
}

export default App;

/* Embora o código acima funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */