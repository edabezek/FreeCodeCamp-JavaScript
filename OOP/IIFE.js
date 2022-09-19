//IIFE
//bu anonymous fonksiyondur-ismi ve tanımlandığı değişken yok
//sondaki parantez expression'dur ve hemen execute yada invoke(çağırmak) edilmesini sağlar.--fonskiyonu yazmamıza gerek kalmaz.
//bu pattern IIFE-immediately invoked function expression
(function(){
    console.log("xxxxxxxxxx");
})();

//create a module
//
let glideMixin = function(obj) {
    obj.glide = function() {
      console.log("gliding");
    }
};
let flyMixin = function(obj) {
    obj.fly = function() {
      console.log("Flying, wooosh!");
    }
};

//we can group these mixins into a module:
let motionModule=(function(){
    return {
        glideMixin : function(obj) {
            obj.glide = function() {
              console.log("gliding");
            }
        },
        flyMixin : function(obj) {
            obj.fly = function() {
              console.log("Flying, wooosh!");
            }
        }
    }
})();

motionModule.glideMixin(duck);
duck.glide();

//now IIFE returns an object motionModule
