import Swordsman from '../js/characters/Swordsman';

test('Swordsman creation', () => {
  const expected = {
    name: 'Aragorn',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const character = new Swordsman('Aragorn');
  expect(character).toEqual(expected);
});
