import React from "react";

class Form extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      select: '',
      nome: '',
      email: '',
      texto: '',
      marque: '',
    }
  }

  handleChange({ target }) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value
    
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <>
        <form>
          <label>
            Selecione
            <select 
            name="select" 
            value={ this.state.select } 
            onChange={ this.handleChange }>
              <option name="casa">Casa</option>
              <option name="apartamento">Apartamento</option>
              <option name="loft">Loft</option>
            </select>
          </label>

          <label>
            nome
            <input 
            name="nome" 
            type="text"
            value={ this.state.nome }
            onChange={ this.handleChange }
            />
          </label>

          <label>
            email
            <input 
            name="email" 
            type="email"
            value={ this.state.email }
            onChange={ this.handleChange }
            />
          </label>

          <label>
            Digite sobre:
            <textarea 
            name="texto" 
            value={ this.state.texto } 
            onChange={ this.handleChange }></textarea>
          </label>

          <label>
            Marque
            <input 
            name="marque"
            type="checkbox"
            value={ this.state.marque }
            onChange={ this.handleChange }
            />
          </label>
        </form>
      </>
    );
  }
}

export default Form;
