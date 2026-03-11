import Undead from '../js/characters/Undead';

test('Undead creation', () => {
  const expected = {
    name: 'Lich',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const character = new Undead('Lich');
  expect(character).toEqual(expected);
});
