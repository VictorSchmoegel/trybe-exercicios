// Promise é um objeto usado para processamento assíncrono. Um Promise (de “promessa”) representa um valor que pode estar disponível agora, no futuro ou nunca.

// Estado da promise: 

// pending (pendente): é o estado inicial dela, ou seja, ela ainda está aguardando o término da execução do código assíncrono;

// fulfilled (realizada): quando a operação assíncrona foi realizada com sucesso. Também é comum dizer que quando a promise está nesse estado ela está resolvida;

// rejected (rejeitada): quando a operação assíncrona termina com algum erro.

new Promise((resolve, reject) => {});

// Os paramentros resolve e reject serão usados para definirmos qual o estado de quepromise tera quando for finalizada

const generateRandomNumber = () => Math.round(Math.random() * 10);

// Promise aceita

const resolvedPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = generateRandomNumber();
        resolve(randomNumber);
    }, 1000);
});

resolvedPromise().then((response) => {
    console.log(`ResolvedPromise: ${response}`);
})

// Retornando um erro quando a promise é rejeitada

const rejectedPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = generateRandomNumber();
        reject(new Error(`O número ${randomNumber} é inválido`));
    }, 1000);
});

rejectedPromise().catch((error) => {
    console.log(`RejectedPromise: ${error.message}`);
})

// Condicionais no promise

const randomPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = generateRandomNumber();
        if (randomNumber % 2 === 0) {
            resolve(randomNumber);
        } else {
            reject(new Error(`O número ${randomNumber} não é válido`))
        }
    })
});

randomPromise()
    .then((response) => {
    console.log(`Promise resolvida. O número gerado é ${response}`)
    })
    .catch((error) => {
        console.log(`Promise rejeitada. O número gerado é ${error.message}`)
    });

