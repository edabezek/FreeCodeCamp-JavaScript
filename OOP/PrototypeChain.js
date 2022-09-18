//All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.
function Bird(name) {
    this.name = name;
  }
  
  typeof Bird.prototype;// Object.prototype

//hasOwnProperty method is defined in Object.prototype

Object.prototype.isPrototypeOf(Bird.prototype);//true

let duck = new Bird("Donald");
duck.hasOwnProperty("name");//true -zaten objesi olduğu için 


