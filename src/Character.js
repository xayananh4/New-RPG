export default class Character {
  constructor(type, attribute, hitPoints, attack, level, xp){
    this.type = type;
    this.attribute = attribute;
    this.hitPoints = hitPoints;
    this.attack = attack;
    this.level = level;
    this.xp = xp;
  }

  addType(type) {
    this.type = type;
  }

  updateAttribute(attribute) {
    this.attribute = attribute;
  }

  updateHp(hitPoints) {
    this.hitPoints = hitPoints;
  }

  updateAtk(attack) {
    this.attack = attack;
  }

}

