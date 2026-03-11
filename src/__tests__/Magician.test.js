import Magician from '../js/characters/Magician';

test('Magician creation', () => {
  const expected = {
    name: 'Gandalf',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const character = new Magician('Gandalf');
  expect(character).toEqual(expected);
});
