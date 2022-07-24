import Magician, { Daemon } from '../app';

test('Маг атакует', () => {
  const magician = new Magician();
  expect(magician.attack(2)).toBe(90);
});

test('Маг атакует дурманами', () => {
  const magician = new Magician();
  expect(magician.stoned(2)).toBe(85);
});

test('Демон атакует', () => {
  const daemon = new Daemon();
  expect(daemon.attack(2)).toBe(90);
});

test('Демон атакует дурманами', () => {
  const daemon = new Daemon();
  expect(daemon.stoned(2)).toBe(85);
});
