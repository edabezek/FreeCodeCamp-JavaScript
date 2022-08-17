//const that values never change
const Pi=3.14;

//let block level variables ,only available where block defined
//console.log(i);error
for(let i=0;i<3;i++){
    console.log(i);
}
//console.log(i);error

//var is for available to the entire function or its not within a function to the entire program
//even though this console.log is below-before the for loop,its still able to log it

console.log(i);//doesnt give error but undefined ,that means it knows the varibale exists because when you define something with var it will be available even before the time that you assigned it.So it knows it exist, but it hasnt been assigned yet

for(var i=0;i<3;i++){
    console.log(i);
}
console.log(i);//doesnt give error
