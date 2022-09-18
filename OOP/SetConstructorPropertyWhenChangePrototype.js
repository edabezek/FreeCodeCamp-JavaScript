//Constructor proprety i manuel eklemek , içindeki constructor propertyi siler.

duck.constructor === Bird;//false
duck.constructor === Object;//true
duck instanceof Bird;//true

//bunu çözmek için prototype tanımlamasına constructor ifadesi eklenir.

Bird.prototype = {
    constructor: Bird,
    numLegs: 2,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name); 
    }
  };