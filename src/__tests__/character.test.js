import Bowerman from '../js/characters/Bowerman';
import Swordsman from '../js/characters/Swordsman';
import Magician from '../js/characters/Magician';
import Undead from '../js/characters/Undead';
import Zombie from '../js/characters/Zombie';
import Daemon from '../js/characters/Daemon';
import Character from '../js/Character';

describe('Character classes', () => {
  test('Bowerman creation', () => {
    const character = new Bowerman('Legolas');
    expect(character.name).toBe('Legolas');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
  });

  test('Swordsman creation', () => {
    const character = new Swordsman('Aragorn');
    expect(character.attack).toBe(40);
    expect(character.defence).toBe(10);
  });

  test('Magician creation', () => {
    const character = new Magician('Gandalf');
    expect(character.attack).toBe(10);
    expect(character.defence).toBe(40);
  });

  test('Undead creation', () => {
    const character = new Undead('Lich');
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
  });

  test('Zombie creation', () => {
    const character = new Zombie('Walker');
    expect(character.attack).toBe(40);
    expect(character.defence).toBe(10);
  });

  test('Daemon creation', () => {
    const character = new Daemon('Balrog');
    expect(character.attack).toBe(10);
    expect(character.defence).toBe(40);
  });

  test('Invalid name (too short)', () => {
    expect(() => new Bowerman('A')).toThrow('Имя должно быть от 2 до 10 символов');
  });

  test('Invalid name (too long)', () => {
    expect(() => new Bowerman('VeryLongName')).toThrow('Имя должно быть от 2 до 10 символов');
  });

  test('name must be string', () => {
    expect(() => new Bowerman(123)).toThrow('Имя должно быть строкой');
  });

  test('invalid type should throw error', () => {
    expect(() => new Character('Test', 'InvalidType')).toThrow('Неверный тип персонажа');
  });
});

describe('Character methods', () => {
  test('levelUp increases level, attack, defence and restores health', () => {
    const character = new Bowerman('Legolas');
    character.attack = 25;
    character.defence = 25;
    character.health = 50;
    
    character.levelUp();
    
    expect(character.level).toBe(2);
    expect(character.attack).toBe(30); // 25 * 1.2 = 30
    expect(character.defence).toBe(30); // 25 * 1.2 = 30
    expect(character.health).toBe(100);
  });

  test('levelUp throws error if health <= 0', () => {
    const character = new Bowerman('Legolas');
    character.health = 0;
    
    expect(() => character.levelUp()).toThrow('Нельзя повысить уровень умершего');
  });

  test('damage reduces health correctly', () => {
    const character = new Bowerman('Legolas');
    character.defence = 25;
    character.health = 100;
    
    character.damage(40);
    
    expect(character.health).toBe(70);
  });

  test('damage does not reduce health below 0', () => {
    const character = new Bowerman('Legolas');
    character.defence = 25;
    character.health = 20;
    
    character.damage(40);
    
    expect(character.health).toBe(0);
  });

  test('damage does nothing if health <= 0', () => {
    const character = new Bowerman('Legolas');
    character.health = 0;
    
    character.damage(40);
    
    expect(character.health).toBe(0);
  });
});
