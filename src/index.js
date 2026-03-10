import './css/style.css';
import Bowerman from './js/characters/Bowerman';
import Swordsman from './js/characters/Swordsman';
import Magician from './js/characters/Magician';
import Undead from './js/characters/Undead';
import Zombie from './js/characters/Zombie';
import Daemon from './js/characters/Daemon';

const characters = {
  bowman: new Bowerman('Леголас'),
  swordsman: new Swordsman('Арагорн'),
  magician: new Magician('Гэндальф'),
  undead: new Undead('Лич'),
  zombie: new Zombie('Зомби'),
  daemon: new Daemon('Балрог')
};

function updateDisplay(charName) {
  const char = characters[charName];
  const card = document.getElementById(charName);
  card.querySelector('.level').textContent = char.level;
  card.querySelector('.health').textContent = char.health;
  card.querySelector('.attack').textContent = char.attack;
  card.querySelector('.defence').textContent = char.defence;
}

function resetAll() {
  Object.keys(characters).forEach(key => {
    const char = characters[key];
    char.level = 1;
    char.health = 100;
    if (char.type === 'Bowman' || char.type === 'Undead') {
      char.attack = 25;
      char.defence = 25;
    } else if (char.type === 'Swordsman' || char.type === 'Zombie') {
      char.attack = 40;
      char.defence = 10;
    } else {
      char.attack = 10;
      char.defence = 40;
    }
    updateDisplay(key);
  });
}

document.querySelectorAll('.btn-levelup').forEach(btn => {
  btn.addEventListener('click', () => {
    const charName = btn.dataset.char;
    try {
      characters[charName].levelUp();
      updateDisplay(charName);
    } catch (e) {
      alert(e.message);
    }
  });
});

document.querySelectorAll('.btn-damage').forEach(btn => {
  btn.addEventListener('click', () => {
    const charName = btn.dataset.char;
    characters[charName].damage(50);
    updateDisplay(charName);
  });
});

document.getElementById('reset-all').addEventListener('click', resetAll);

resetAll();