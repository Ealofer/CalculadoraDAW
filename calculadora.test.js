const { suma, resta, multiplicar, dividir} = require('./calculadora');

test('Suma 2 + 3 y devuelve 5', () => {
    expect(suma(2, 3)).toBe(5);
});

test('Resta 5 - 3 y devuelve 2', () => {
    expect(resta(5, 3)).toBe(2);
});

test('multiplicar 5 * 2 y devuelve 10', () => {
    expect(multiplicar(5,2)).toBe(10);
});

test('dividir 10 / 5 y devuelve 2', () => {
    expect(dividir(10,5)).toBe(2);
});