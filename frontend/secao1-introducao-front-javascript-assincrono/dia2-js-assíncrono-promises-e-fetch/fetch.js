// O método fetch recebe dois parâmetros:

fetch(URL, config)

// URL (obrigatório): é o endereço da API para qual faremos a requisição;
// Objeto de configurações (opcional): caso a requisição precise de alguma configuração adicional, é possível defini-la nesse objeto.

// fazendo uma requisição usando o fetch
/* Para fazer uma requisição usando o método fetch, precisamos passar a URL da API que queremos acessar. Para esse exemplo, vamos usar a o endereço https://api.goprogram.ai/inspiration, que deve nos retornar um objeto no formato: */

fetch("https://api.goprogram.ai/inspiration")
  .then(response => response.json())
  .then(data => console.log(`${data.quote} | ${data.author}`));