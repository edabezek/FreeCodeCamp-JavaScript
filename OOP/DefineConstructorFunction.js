//Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
//Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
//Constructors define properties and behaviors instead of returning a value as other functions might.

function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
  }

let blueBird=new Bird();//tells js to create a new instance of Bird called blueBird. 


//Extend Constructors to Receive Arguments
//Bird constructor are automatically named Albert, are blue in color, and have two legs. What if you want birds with different values for name and color? It's possible to change the properties of each bird manually but that would be a lot of work
let swan=new Bird();
swan.name="ed";
swan.color="red";

//Suppose you were writing a program to keep track of hundreds or even thousands of different birds in an aviary. It would take a lot of time to create all the birds, then change the properties to different values for every one. To more easily create different Bird objects, you can design your Bird constructor to accept parameters:

function Bird2(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }

let cardinal = new Bird("Bruce", "red");

