import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    botaoUmCliques: 0,
    botaoDoisCliques: 0,
    botaoTresCliques: 0
  }

  getButtonColor = (num) => num % 2 === 0 ? 'green' : 'white'

  handleClickBotaoUm = () => {
    const { clickBtn1 } = this.state
    this.setState ((estadoAnterior, _props) => ({
      botaoUmCliques: estadoAnterior.botaoUmCliques + 1,
    }), () => {
      console.log(`Botão 1 ${this.getButtonColor(clickBtn1)}`)
    })
  }

  handleClickBotaoDois = () => {
    const { clickBtn2 } = this.state
    this.setState ((estadoAnterior, _props) => ({
      botaoDoisCliques: estadoAnterior.botaoDoisCliques + 1,
    }), () => {
      console.log(`Botão 2 ${this.getButtonColor(clickBtn2)}`)
    })
  }

  handleClickBotaoTres = () => {
    const { clickBtn3 } = this.state
    this.setState ((estadoAnterior, _props) => ({
      botaoTresCliques: estadoAnterior.botaoTresCliques + 1,
    }), () => {
      console.log(`Botão 3 ${this.getButtonColor(clickBtn3)}`)
    })
  }

  render() {
    const { clickBtn1, clickBtn2, clickBtn3 } = this.state;
    return (
      <>
        <button 
        onClick={ this.handleClickBotaoUm }
        style={ { backgroundColor: this.getButtonColor(clickBtn1) } } 
        >
          {this.state.botaoUmCliques}
        </button>
        <button 
        onClick={ this.handleClickBotaoDois }
        style={ { backgroundColor: this.getButtonColor(clickBtn2) } }
        >
          {this.state.botaoDoisCliques}
        </button>
        <button 
        onClick={ this.handleClickBotaoTres }
        style={ { backgroundColor: this.getButtonColor(clickBtn3) } } 
        >
          {this.state.botaoTresCliques}
        </button>
      </>
    );
  }
}

export default App;
