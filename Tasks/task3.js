//Level 1 – Functions Basics
    //Task 1: Student Form Function
    function studentForm(name, age, course){
        console.log("Name :" ,name);
        console.log("Age :" ,age);
        console.log("Course:" ,course);   
    }
    studentForm("greeshma",22,"cse");


    //Task 2: Calculator Function
    function calc(a,b){
        console.log("Addition:",a+b);
        console.log("subtarction:" ,a-b);
        console.log("multiplication:",a*b);
    }
    calc(8,2);


    //Task 3: Reusable Greeting
    function greeting(name){
        console.log("Hello",name); 
    }
    greeting("greeshma");
    greeting("sahasra");
    greeting("yash");


// Level 2 – Return & Scope
  //Task 4: Return Value
  function square(num){
    console.log(num*num);
  }
  square(5)

  //Task 5: Scope Check

  //1.inside the function
  function Scope() {
  let secret = "javascript";
  console.log(secret); 
}
Scope();
    /*if we try to print inside the function then it gives the output as javascript because:
      --> 'let' is the 'block scope' so we can access the variables inside the function
      -->At the same time we access for 'const' also because it is also 'block scope'  */
 
 //2.outside the function
 
 /*function Scope1() {
  let Secret = "javascript";
}
  Scope1();
  console.log(Secret); */ //we get an error
    /* if we try to print outside the function we get an reference error because 'let' is 'block scope'
        if we use 'var' then we dont get any error because var is 'global scope'*/


//Level 3 – Spread / Rest
    // Task 6: Merge Arrays
    let boys = ["car", "bike"];
    let girls = ["doll", "teddy"];
    let result = [...boys, ...girls];
    console.log(result);

    //Task 7: Unlimited Numbers
    function sumAll(...nums) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }

    console.log(sum);
    }

    sumAll(10, 20, 30, 40); // 100

// Level 4 – Destructuring
    // Task 8: Array Destructuring
    let colors = ["red", "green", "blue"];
    let [c1, c2, c3] = colors;
    console.log(c1, c2, c3);

    //Task 9: Object Destructuring
    let emp = {name:"Naveen",role:"Developer",salary:"5LPA"};
    let { name, role,salary } = emp;
    console.log(name, role);


//Level 5 – Real-Time Logic
    // Task 10: Offer Generator
    function* Generator() {
    yield "10% cashback";
    yield "20% cashback";
    yield "50% cashback";
    yield "Try again";
    }

    let offers = Generator();

    console.log(offers.next().value);
    console.log(offers.next().value);
    console.log(offers.next().value);
    console.log(offers.next().value);
    console.log( "No more offers");

//Level 6 – Advanced
    // Task 11: Curry Function
    function add(a) {
        return function (b) {
            return function (c) {
                return a + b + c;
            };
        };
    }
    console.log(add(10)(20)(30));

    //Task 12: Student Marks Analyzer
    function marks(...nums) {
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        total = total + nums[i];
    }

    let average = total / nums.length;

    console.log("Total =", total);
    console.log("Average =", average);
    }

    marks(80, 90, 70, 60);


//Challenge Task (Real Company Level)
function register(name, role, ...skills) {
  console.log("Name:", name);
  console.log("Role:", role);

  let skill = "";

  for (let i = 0; i < skills.length; i++) {
    skill = skill + skills[i] + " ";
  }

  console.log("Skills:", skill);
}

register("greeshma","Frontend", "HTML", "CSS", "JS", "React","mysql");

