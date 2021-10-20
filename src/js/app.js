/* eslint-disable no-console */
import Team from './team';
import Bowman from './Bowman';
import Daemon from './Daemon';
import Magician from './Magician';
import Swordsman from './Swordsman';
import Undead from './Undead';
import Zombie from './Zombie';

const unit1 = new Bowman('Oleg');
const unit2 = new Daemon('Luci');
const unit3 = new Magician('Gandalf');
const unit4 = new Swordsman('Aragorn');
const unit5 = new Undead('Ghost');
const unit6 = new Zombie('Fred');
const enemyTeam = new Team(unit1, unit2, unit3, unit4, unit5, unit6);

for (const person of enemyTeam) {
  console.log(person);
}
