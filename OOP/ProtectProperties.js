//bird had a public property name,because it can be accessed and changed outside of birds definition.

bird.name="xx";

//the simpliest way to make this public property to private is by creating a variable within the constructor function.This changes the scope of that variable to be within the constructor function versus available globally.This way,the variable can only be accessed and changed by methods also within the constructor function.

function Bird(){
    let hatchedEgg=10;//private variable  

    this.getHatchedEggCount=function(){//bu fonksiyon öncelikli foksiyon,çünkü hatchedEgg(private değişken) değişkenine erişebiliyor.
        //ikisi de aynı kapsamda olduğu için erişim var
        return hatchedEgg;
    };
}
let ducky =new Bird();
ducky.getHatchedEggCount();