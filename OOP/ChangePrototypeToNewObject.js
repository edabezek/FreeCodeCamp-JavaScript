//şimdiye kadar properties'leri prototype ile eklemiştik :
Bird.prototype.numLegs = 2;
//Çok fazla eklemek istersek, yine optimize edilmemiş olur.
//bunları obje-object şeklinde eklemek en etkili yöntemdir.
Bird.prototype = {
    numLegs: 2, 
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
