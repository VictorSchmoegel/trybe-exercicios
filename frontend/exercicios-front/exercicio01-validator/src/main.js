import validator from 'validator';

const inputValue = document.querySelector('#value');
const selector = document.querySelector('#option');
const validatorBtn = document.querySelector('button');
const textResult = document.querySelector('h3');

validatorBtn.addEventListener('click', (event) => {
    event.preventDefault();
    
    const validations = {
        cpf: validator.isTaxID(inputValue.value, 'pt-BR'),
        email: validator.isEmail(inputValue.value),
        minusculo: validator.isLowercase(inputValue.value),
    }
    
    textResult.innerHTML = `A validação retornou ${validations[selector.value]}`
});
