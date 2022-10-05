//  INHERITANCE EXAMPLE
class Pokemon {
    constructor(name,hp,atk){
        this.name=name;
        this.maxHp=hp;
        this.hp=hp;
        this.atk=atk;
        this.level=1
        this.type="normal"
        this.attackName="tackle"
    }
}

class WaterPokemon extends Pokemon {
    constructor(name,hp,atk){
        super(name,hp,atk);
        this.type="water";
        this.strength="fire";
        this.weakness="grass";
        this.attackName="Water Gun"
    }

}

new WaterPokemon(name, hp, atk)


function Animal(raining, noise) {
    this.raining = raining;
    this.noise = noise;
    this.makeNoise = () => {
      if (this.raining === true) {
        console.log(this.noise);
      }
    };
  }

const dog = new Animal(true, "woof");


// aggregation
const merged = { ...obj1,...obj2,...obj3};
const merged = Object.assign({}, obj1, obj2, obj3);


// week5
