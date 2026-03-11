import Zombie from '../js/characters/Zombie';

test('Zombie creation', () => {
  const expected = {
    name: 'Walker',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const character = new Zombie('Walker');
  expect(character).toEqual(expected);
});
