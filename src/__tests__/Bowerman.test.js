import Bowerman from '../js/characters/Bowerman';

test('Bowerman creation', () => {
  const expected = {
    name: 'Legolas',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const character = new Bowerman('Legolas');
  expect(character).toEqual(expected);
});
