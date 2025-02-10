const { sumar, restar } = require('./calculadora');

test('Suma 2 + 3 y devuelve 5', () => {
    expect(sumar(2, 3)).toBe(5);
});

test('Resta 5 - 3 y devuelve 2', () => {
    expect(restar(5, 3)).toBe(2);
});
test('Multiplica 5 * 3 y devuelve 15', () => {
    expect(multiplicar(5, 3)).toBe(15);
});
test('Divide 10 / 2 y devuelve 5', () => {
    expect(dividir(10, 2)).toBe(5);
});