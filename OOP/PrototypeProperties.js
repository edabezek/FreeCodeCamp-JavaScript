//Since numLegs will probably have the same value for all instances of Bird, you essentially have a duplicated variable numLegs inside each Bird instance.

//This may not be an issue when there are only two instances, but imagine if there are millions of instances. That would be a lot of duplicated variables.

function Dog(name) {
    this.name = name;
  }
  
Dog.prototype.numLegs = 4;//tüm Dog instance-larında geçerli numLegs ekledik.
  
let beagle = new Dog("Snoopy");

