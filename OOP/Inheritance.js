//DRY 
//describe method shared by bird and dog
//this repeat not follow dry principle
Bird.prototype = {
    constructor: Bird,
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
  
Dog.prototype = {
    constructor: Dog,
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
//The code can be edited to follow the DRY principle by creating a supertype (or parent) called Animal:

function Animal() { };//supertype

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};
//böylece bird ve dog constructor'ından describe ı silebiliriz.

Bird.prototype = {
    constructor: Bird
  };
  
Dog.prototype = {
    constructor: Dog
  };











