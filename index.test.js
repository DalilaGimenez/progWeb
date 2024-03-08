const func = require('./index')

describe('Testa a função calcularMedia', () => {
    it('Testa se a função calcularMedia retorna a média dos valores do array', () => {
        expect(func.calcularMedia([1, 2, 3, 4])).toBe(2.5);
    });

    it('Testa se a função calcularMedia retorna a média dos valores do array', () => {
        expect(func.calcularMedia([2, 3, 5, 5])).toBe(3.75);
    });

    it('Testa se a função calcularMedia retorna a média dos valores do array', () => {
        expect(func.calcularMedia([1, 1, 1, 1])).toBe(1);
    });

    it('Testa se a função calcularMedia retorna a média dos valores do array', () => {
        expect(func.calcularMedia([0, 0, 0, 0])).toBe(0);
    });

    it('Testa se a função calcularMedia retorna a média dos valores do array', () => {
        expect(func.calcularMedia([5, 5, 5, 5])).toBe(5);
    });
});