class Animal {
 constructor(name, color) {
    this.name = name;
    this.color = color;
 }
 run(){
    console.log(`${this.name} is running`);
 }
 speak(){
    console.log(`${this.name} is speaking`);
 }
}

class monkey extends Animal{
    eatBanana() {
        console.log(`${this.name} is eating banana`);
    }
}

let ani = new Animal("zibra", "black-White");
let m = new monkey("donkey", "Green");

ani.run();
m.eatBanana();