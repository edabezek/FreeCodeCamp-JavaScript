//When a return statement is reached, the execution of the current function stops and control returns to the calling location.(Bir return deyimine ulaşıldığında, mevcut fonksiyonun yürütülmesi durur ve kontrol, çağıran konuma geri döner.)

//burada consolda sadece hello yazar,world dizisini döndürür,bybye consola yazmaz.
function myFun() {
    console.log("Hello");
    return "World";
    console.log("byebye")
  }
  myFun();