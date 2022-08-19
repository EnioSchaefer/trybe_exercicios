const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  const dragonDamage = Math.floor(Math.random() * (50 - 15 + 15) + 15);
  return dragonDamage;
} 

const warriorDamage = () => {
  const warriorDamage = Math.floor(Math.random() * ((30 * 2) - 30 + 30) + 30);
  return warriorDamage;
}

const mageDamage = () => {
  const mageDamage = Math.floor(Math.random() * ((45 * 2) - 45 + 45) + 45)
  return mageDamage;
}

const gameActions = {
  warriorTurn: (warriorDamage) => {
    const damage = warriorDamage();
    if (warrior.damage === undefined) { warrior.damage = 0} ;
    warrior.damage += damage;
    dragon.healthPoints -= damage;
  },
  mageTurn: (mageDamage) => {
    const damage = mageDamage();
    if (mage.damage === undefined) {mage.damage = 0};
    if (mage.mana < 15) {
      mage.damage = "Não possui mana suficiente";
    }
    mage.mana -= 15;
    mage.damage += damage;
    dragon.healthPoints -= damage;
  },
  dragonTurn: () => {
    const damage = dragonDamage();
    if (dragon.damage === undefined) {dragon.damage = 0};
    dragon.damage += damage;
    warrior.healthPoints -= damage;
    mage.healthPoints -= damage;
  },
  finalResult: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.finalResult());