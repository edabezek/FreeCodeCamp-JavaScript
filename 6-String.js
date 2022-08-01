//concad clause
var ourName="freecodecamp";
var ourString="Hello,our name is " +ourName +",how are you?";
console.log(ourString);

//length of a string 
var firstNameLength=0;
var firstName="Ada";
firstNameLength=firstName.length;
console.log(firstNameLength);

//word blanks
function wordBlanks(myNoun,myAdjective,myVerb,myAdverb){
    var result = "";
    result+="The "+myAdjective+" "+myNoun+" "+myVerb+" "+ "to the store " +myAdverb
    return result;
}
console.log(wordBlanks("dog","big","ran","quickly"));
console.log(wordBlanks("bike","slow","flew","slowly"));