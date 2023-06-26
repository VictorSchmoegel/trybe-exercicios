const myFizzBuzz = require("./ex02")

describe('função myFizzBuzz é divisível por 3 ou 5', () => {
    it('requisito 01', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
    it('requisito 02', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    });
    it('requisito 03', () => {
        expect(myFizzBuzz(10)).toBe('buzz');
    });
    it('requisito 04', () => {
        expect(myFizzBuzz(8)).toBe(8);
    });
    it('requisito 05', () => {
        expect(myFizzBuzz('string')).toBe(false);
    });
});
