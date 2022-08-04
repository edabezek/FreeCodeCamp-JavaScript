//JavaScript’s 7 primitive types
let primitiveTypes=[
    "string",
    "number",
    "null",
    "undefined",
    "boolean",
    "symbol",
    "bigint",
];
//undefined belirli bir değer atanmamış bir değişkenin default değeridir.Veya açık bir dönüş değeri olmayan bir işlev örneğin console.log(1) veya bir nesnede bulunmayan bir özellik buna verilebilir.
//javascript bizim için tanımsız değer ataması yapar.


//null hiçbir değeri temsil etmeyen değerdir.null bir değişkene açıkça tanımlanan değerdir.

console.log(null == undefined);//logs true
console.log(null === undefined);//logs false

//sample
let _thisIsUndefined;
const doNothing=()=>{};
const someObj={
    a:"ay",
    b:"bee",
    c:"si",
};

console.log(_thisIsUndefined);//logs undefined
console.log(doNothing());//logs undefined
console.log(someObj["d"]);//logs undefined