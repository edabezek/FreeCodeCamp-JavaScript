//Objects can have a special type of property, called a method.

let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this duck is " + duck.name + ".";}
  };
  duck.sayName();

//If the variable name changes, any code referencing the original name would need to be updated as well. In a short object definition, it isn't a problem
//A way to avoid these issues is with the this keyword

let duck2 = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this duck is " + this.name + ".";}
  };

//In the current context, this refers to the object that the method is associated with: duck. If the object's name is changed to mallard, it is not necessary to find all the references to duck in the code. It makes the code reusable and easier to read.