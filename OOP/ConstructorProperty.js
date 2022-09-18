let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird);//true
console.log(beagle.constructor === Dog);//true

//yada -candidate , bird içinde mi?
function joinBirdFraternity(candidate) {
    if (candidate.constructor === Bird) {
      return true;
    } else {
      return false;
    }
  }
// constructor overwritten olursa instanceof ile kontrol etmek daha iyi olur.