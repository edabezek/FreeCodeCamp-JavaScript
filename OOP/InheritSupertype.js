//supertype-parent
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
//one way to create an instance of Animal using the new operator:

let animal1 = new Animal(); 
//or
let animal2 = Object.create(Animal.prototype);//Object.create(obj) creates a new object, and sets obj as the new object's prototype

animal1.eat();
animal1 instanceof Animal;//true

//subtype-child
Bird.prototype = Object.create(Animal.prototype);

let duck = new Bird("Donald");
duck.eat();
//duck inherits all of Animal's properties, including the eat method.
