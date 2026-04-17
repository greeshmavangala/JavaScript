//Task 1: Variable Update
var a = 50;
a = 100;  //var can be redeclare 
console.log("Number:", a); //so the output will be 100

//Task 2: Let Variable Math
let marks = 80;
result=marks+10; //here marks has already had value 80 and adds 10 to that which is (80+10)
console.log(result);//output will be 90

//Task 3: Const Value
const price = 500;
finalPrice = price + 100;//here price value is 500 and adds 100 to that 
console.log(finalPrice);// output will be 600

//Task 4: Printing Statements
console.log("Welcome team"); 
console.log(2026);
console.log(true);

//Task 5: Datatype Check
console.log(typeof("Javscript")); // "javascript" is string type because it has double quotes
console.log(typeof(250));//250 is number type
console.log(typeof(false));// flase is a boolean type

//Task 6: Array Task
let fruits=["Apple","Water melon","Mango","Banana","Kiwi"];
console.log(fruits); // it will print whole array
console.log(fruits[0]); // it prints the first fruit that is apple because apple index value is 0
console.log(fruits[fruits.length-1]);// it prints last fruit because length of the array is 5 and length-1 will be 4 which is last fruits index value

//Task 7: Object Task
student = {name: "Greeshma",age: 22, course: "MERN"}
console.log("Name:" ,student.name);// it prints Greeshma
console.log("Age:" ,student.age); //it prints 22

//Task 8: Arithmetic Operators
console.log(20+10); 
console.log(50-25); 
console.log(5*5);
console.log(100/4);
console.log(20%3);

// Task 9: Increment / Decrement
let x = 5;
x++; //5++ wil be 6
console.log(x); // output will be 6

let y = 10;
y--; //10-- will be 9
console.log(y); //prints 9

//Task 10: Comparison Operators
console.log(10 > 5); //true
console.log(5 < 2); //false
console.log(20 == "20"); //true beacuse it will check only the value not type
console.log(15 === "15"); //false beacuse it checks both value and type where 15 and "15" datatype is diff
console.log(10 != 8);//true

//Task 11: Logical Operators
console.log(5 > 2 && 10 > 3); //true (because 5>2 is true and 10>3 is also true so in and operation both should be true)
console.log(7 < 5 || 8 > 2); //true (because 7<5 is false where 8>2 is true so in or operator any one must be true)
console.log(!(10 > 5)); //false (!(true) will be false)

//Task 12: Ternary Operator
let age = 18;
let Age=age>=18 ? "Eligible" : "Not Eligible"; //it checks whether age is >=18 or not if the condition is true then it prints eligible if flase it prints not eligible
console.log(Age);// condition is true so it prints "Eligible"




















