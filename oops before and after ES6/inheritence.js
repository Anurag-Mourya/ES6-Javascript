//Creacting creature prototype..

function Creature(ls){
    this.lifeSpam = ls;
}

//method inside Creature prototype..
Creature.prototype.breath = function(){
    console.log('breathing...');
}

//object
let creature1 = new Creature(100);
console.log(creature1);

function Person(first,last,a){
    this.firstName = first;
    this.lastName = last;
    this.age = a;
}

//method inside Person prototype..
Person.prototype.fullName = function(){
    this.firstName + " " + this.lastName;
}

//method of Creature prototype connected to the Person prototype..
Person.prototype  = Object.create(Creature.prototype);//Object.create is a method is the connection of prototypes...

let person = new Person('Anurag', 'Mourya', 23);
let person1 = new Person('Anurag', 'Mourya', 23);
console.log(person);
console.log(person1.breath());

//here the person object is also take breadth so we are connected Creature prototype to Person prototype...


