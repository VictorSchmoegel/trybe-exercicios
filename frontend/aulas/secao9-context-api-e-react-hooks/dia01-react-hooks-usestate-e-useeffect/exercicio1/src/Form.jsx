import React from 'react';
import { useState } from 'react';

function Form() {

  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [module, setModule] = useState();

  return (
    <form>
      <fieldset>
        <legend>Dados pessoais</legend>
        <label htmlFor='name'>
          Nome completo
          <input
            type='text'
            id='name'
            value={ fullName }
            onChange={({ target }) => setFullName(target.value)}
          />
        </label>
        <label htmlFor='idade'>
          Idade
          <input
            type='text'
            id='idade'
            value={ age }
            onChange={({ target }) => setAge(target.value)}
          />
        </label>
        <label htmlFor='cidade'>
          Cidade
          <input
            type='text'
            id='cidade'
            value={ location }
            onChange={({ target }) => setLocation(target.value)}
          />
        </label>
      </fieldset>
      <fieldset>
        <legend>Módulo</legend>
        <label htmlFor='fundamentos'>
            Fundamentos
            <input
              type='radio'
              id='fundamentos'
              name='module'
              value='Fundamentos'
              checked={module === 'Fundamentos'}
              onChange={({ target }) => setModule(target.value)}
            />
        </label>
        <br></br>
        <label htmlFor='FrontEnd'>
            FrontEnd
            <input
              type='radio'
              id='FrontEnd'
              name='module'
              value='FrontEnd'
              checked={module === 'FrontEnd'}
              onChange={({ target }) => setModule(target.value)}
            />
        </label>
        <br></br>
        <label htmlFor='BackEnd'>
            BackEnd
            <input
              type='radio'
              id='BackEnd'
              name='module'
              value='BackEnd'
              checked={module === 'BackEnd'}
              onChange={({ target }) => setModule(target.value)}
            />
        </label>
        <br></br>
        <label htmlFor='Ciência'>
            Ciência da Computação
            <input
              type='radio'
              id='Ciência'
              name='module'
              value='Ciência'
              checked={module === 'Ciência'}
              onChange={({ target }) => setModule(target.value)}
            />
        </label>
        <br></br>
      </fieldset>
      <button
        type='submit'
        onClick={(event) => {
          event.preventDefault();
          console.log('click');
        }}
      >
        Enviar
      </button>
    </form>
  );
}

export default Form;
