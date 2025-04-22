const Calculadora = require('./Calculadora');

describe('Testes da Calculadora', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculadora();
  });

  // ✅ Testes que PASSAM
  test('Somar 2 + 3 = 5', () => {
    expect(calc.somar(2, 3)).toBe(5);
  });

  test('Subtrair 10 - 4 = 6', () => {
    expect(calc.subtrair(10, 4)).toBe(6);
  });

  test('Multiplicar 3 * 3 = 9', () => {
    expect(calc.multiplicar(3, 3)).toBe(9);
  });

  test('Dividir 8 / 2 = 4', () => {
    expect(calc.dividir(8, 2)).toBe(4);
  });

  test('Divisão por zero lança erro', () => {
    expect(() => calc.dividir(10, 0)).toThrow('Divisão por zero');
  });

  // ❌ Testes que FALHAM (de propósito)
  test('Somar 2 + 2 = 5 (falha)', () => {
    expect(calc.somar(2, 2)).toBe(5);
  });

  test('Subtrair 7 - 3 = 5 (falha)', () => {
    expect(calc.subtrair(7, 3)).toBe(10);
  });

  test('Multiplicar 2 * 5 = 11 (falha)', () => {
    expect(calc.multiplicar(2, 5)).toBe(11);
  });

  test('Dividir 9 / 3 = 2 (falha)', () => {
    expect(calc.dividir(9, 3)).toBe(2);
  });

  test('Divisão por zero = 0 (falha)', () => {
    expect(() => calc.dividir(10, 0)).toBe(0); // erro esperado, mas testando valor
  });
});
