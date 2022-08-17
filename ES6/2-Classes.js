//class declaration
class PersonA {
    constructor(name,year_born){
        this.name=name;
        this.year_born=year_born;
    }
}
//class expressions
//unnamed
var Person2=class  {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
//named
var Person3=class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
// SAMPLE
class Person {
    constructor(name,year_born){
        this.name=name;
        this.year_born=year_born;
    }
    get age(){
    return this.calcAge();
    }
    calcAge(){
        return new Date().getFullYear()-this.year_born;
    }
    what(){
        console.log(this.name );
    }
    static arms(){
        return 2;
    }
}
var me = new Person("Eda",1993)
console.log(me.name+ " was born in "+me.year_born);
me.what();
console.log(me.name+"has"+Person.arms()+" arms!");

//class extends
class Juggler extends Person{
    what(){
        console.log(this.name+"is a juggler.");
    }
}
var you = new Juggler("joy",1980);
me.what();//beau is a juggler
you.what();//joy is a juggler