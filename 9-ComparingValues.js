// equality operator (==) 
//strict equality operator (===)

//If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values.
// However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.

//3 == '3' returns true because JavaScript performs type conversion from string to number. 3 === '3' returns false because the types are different and type conversion is not performed.

//In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:
typeof 3 //returns number
typeof '3'//returns string

//The inequality operator (!=) is the opposite of the equality operator.

1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false

//The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal"

3 !==  3  // false
3 !== '3' // true
4 !==  3  // true

//The greater than operator (>) compares the values of two numbers. 
//Like the equality operator, the greater than operator will convert data types of values while comparing.

5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false

//The greater than or equal to operator (>=) 
//Like the equality operator, the greater than or equal to operator will convert data types while comparing.

6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false

//The less than operator (<) compares the values of two numbers.
//Like the equality operator, the less than operator converts data types while comparing.

2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false

//The less than or equal to operator (<=) compares the values of two numbers
//Like the equality operator, the less than or equal to operator converts data types.

4   <= 5 // true
'7' <= 7 // true
5   <= 5 // true
3   <= 2 // false
'8' <= 4 // false

//The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

if (num > 5) {
    if (num < 10) {
      return "Yes";
    }
  }
  return "No";
//or

if (num2 > 5 && num2 < 10) {
    return "Yes";
  }
  return "No";

//The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

//switch
//If you have many options to choose from, use a switch statement
//case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed.
switch (lowercaseLetter) {
    case "a":
      console.log("A");
      break;
    case "b":
      console.log("B");
      break;
  }
//
  function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
  switch (val) {
    case val=1:
      answer = "alpha";
      break;
    case val=2:
      answer = "beta";
      break;
    case val=3:
     answer = "gamma";
      break;
    case val=4:
      answer = "delta";
      break; 
  }
    // Only change code above this line
    return answer;
  }
  
  caseInSwitch(1);
  
//






