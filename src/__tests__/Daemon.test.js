import Daemon from '../js/characters/Daemon';

test('Daemon creation', () => {
  const expected = {
    name: 'Balrog',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const character = new Daemon('Balrog');
  expect(character).toEqual(expected);
});
