import React from "react";

class Form extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChave: '',
    }
  }

  handleChange(event) {
    this.setState({ estadoFavorito: event.target.value })
  }

  render() {
    return (
      <div>
        <h1>Estados e react: Ferramenta incrível ou reagindo a regionalismo</h1>
        <form className="form">
          <label>
            Diga qual é o seu Estado favorito! Do Brasil ou do React, você quem sabe!
            <textarea name="estadoFavorito" 
            value={this.state.estadoFavorito}
            onChange={this.handleChange} />
          </label>

          <label>
            email
            <input name="email" type="email"></input>
          </label>

          <label>
            Nome
            <input name="nome" type="text"></input>
          </label>

          <label>
            Idade
            <input name="idade" type="Number"></input>
          </label>

          <label>
            Vai comparecer á conferência?
            <input name="vaiComparecer" type="checkbox"></input>
          </label>

          <label>
            Escolha sua palavra favorita:
            <select name="palavraFavorita">
              <option /* value={estado} */>Estado</option>
              <option /* value={evento} */>Evento</option>
              <option /* value={props} */>Props</option>
              <option /* value={hooks} */>Hooks</option>
            </select>
          </label>
        </form>
      </div>   
    );
  }
}

export default Form;