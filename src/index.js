import './css/style.css';
import Bowerman from './js/characters/Bowerman';
import Swordsman from './js/characters/Swordsman';
import Magician from './js/characters/Magician';
import Undead from './js/characters/Undead';
import Zombie from './js/characters/Zombie';
import Daemon from './js/characters/Daemon';

const output = document.getElementById('output');

try {
  const characters = [
    new Bowerman('Legolas'),
    new Swordsman('Aragorn'),
    new Magician('Gandalf'),
    new Undead('Lich'),
    new Zombie('Walker'),
    new Daemon('Balrog'),
  ];

  characters.forEach((char) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <strong>${char.name}</strong> (${char.type})<br>
      Health: ${char.health}, Level: ${char.level}<br>
      Attack: ${char.attack}, Defence: ${char.defence}
      <hr>
    `;
    output.appendChild(div);
  });
} catch (error) {
  output.innerHTML = `<p style="color: red">Ошибка: ${error.message}</p>`;
}
