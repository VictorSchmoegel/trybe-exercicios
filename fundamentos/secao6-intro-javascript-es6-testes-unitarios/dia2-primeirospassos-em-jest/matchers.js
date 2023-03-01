// 'toBe' Testa a igualdade estrita entre o valor passado para expect e seu argumento ex:
expect(5).toBe('5'); // fail

// 'toEqual' é usado para testar a igualdade de objetos e arrays, onde acessa cada elemento do objeto ou array, fazendo um trabalho de comparação específico e que retorna uma resposta mais voltada para a necessidade dos testes:
test('Igualdade de array e object', () => {
    const arr = [1, 2, 3];
    const obj = { a: 1, b: 2, c: 3 };

    expect(arr).toBe([1, 2, 3]); // fails
    expect(obj).toBe({ a: 1, b: 2, c: 3 }); // fails
    expect(arr).toEqual([1, 2, 3]); // OK
    expect(obj).toEqual({ a: 1, b: 2, c: 3 }); // OK
});

// A função 'describe' serve para agrupar vários testes, ajudando a melhorar a organização. Você pode utilizar 'describe', por exemplo, para separar testes de funções diferentes em um mesmo arquivo, ou para agrupar testes relacionados dentro de uma função complexa que requer muitos testes. Dentro de cada bloco, qualquer declaração de variáveis ou funções é local a esse bloco.
const multiply = (a, b) => a * b;
const subtract = (c, d) => c - d;

describe('testa função multiply', () => {
    test('retorna multiplicação com números positivos', () => {
        expect(multiply(10, 4)).toBe(40);
    });
    test('retorna multiplicação com número negativo', () => {
        expect(multiply(10, -4)).toBe(-40);
    });
})
describe('testa função subtract', () => {
    test('retorna subtração de número menor', () => {
        expect(subtract(12, 7)).toBe(5);
    });
    test('retorna subtração de número maior', () => {
        expect(subtract(3, 4)).toBe(-1);
    });
})
