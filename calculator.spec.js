const {suma, resta, multiplicacion, division} = require('./calculator')

describe('suma, sumar numeros', ()=> {
test('suma de dos numeros, 7,11', () => {
  expect(suma(7,11)).toBe(18);
});
test('suma de dos numeros, 20, -100', () => {
  expect(suma(20, -100)).toBe(-80);
});
test('suma de 1 numero, 53', () => {
  expect(suma(53)).toBe(53);
});
test('suma de ningun numero, 0', () => {
  expect(suma()).toBe(0);
});
});

describe('resta, restar numeros', ()=> {
test('resta de dos numeros, 11,7', () => {
  expect(resta(11,7)).toBe(4);
});
test('resta de dos numeros, 3,15', () => {
  expect(resta(3,15)).toBe(-12);
});
test('resta de 1 numero, 53', () => {
  expect(resta(53)).toBe(53);
});
test('resta de ningun numero, 0', () => {
  expect(resta()).toBe(0);
});
});

describe('multiplicacion, multiplicar numeros', ()=> {
test('multiplicacion de dos numeros, 2,4', () => {
  expect(multiplicacion(2,4)).toBe(8);
});
test('multiplicacion de dos numeros, 5,-6', () => {
  expect(multiplicacion(5,-6)).toBe(-30);
});
test('multiplicacion de 1 numero, 53', () => {
  expect(multiplicacion(53)).toBe(53);
});
test('multiplicacion de ningun numero, 0', () => {
  expect(multiplicacion()).toBe(0);
});
});

describe('division, dividir numeros', ()=> {
test('division de dos numeros, 10,2', () => {
  expect(division(10,2)).toBe(5);
});
test('division de dos numeros, 10,2', () => {
  expect(division(10,-2)).toBe(-5);
});
test('division de 1 numero, 53', () => {
  expect(division(53)).toBe(53);
});
test('division de ningun numero, 0', () => {
  expect(division()).toBe(0);
});
test('division de un numero entre 0, 2,0', () => {
  expect(division(2,0)).toBe(null);
});
test('division de un numero entre 0, 0,2', () => {
  expect(division(0,2)).toBe(0);
});
});