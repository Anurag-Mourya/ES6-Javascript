// //hasOwnProperty..

// let person = {
//     name: 'Anurag'
// }

// console.log(person);
// console.log(person.hasOwnProperty('name'));

// //Create object with constructon function..

// function Person(n){
//     this.name = n;
// }

// let person1 = new Person('Anurag');
// console.log(person1);

//Prototype////

function Person(first,last,a){
    this.firstName = first;
    this.lastName = last;
    this.age = a;
    // this.fullName = function(){
    //     this.firstName + " " + this.lastName;
    // }
}

// function stared in prototype to follow DRY concept

Person.prototype.fullName = function(){
    this.firstName + " " + this.lastName;
}
//the value of this function is stored in Person prototype now the method is only connected whith objects...   

// //we can also connect property with prototype..
// Person.prototype.color = 'white';

let person1 = new Person('Anurag', 'Mourya', 23);
let person2 = new Person('Amit', 'Kumar', 17);
console.log(person1);
console.log(person2);

console.log(person1.fullName())
console.log(person2.fullName())