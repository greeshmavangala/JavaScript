let students = [
 {id:1, name:"Naveen", mark:85, course:"MERN"},
 {id:2, name:"John", mark:45, course:"Python"},
 {id:3, name:"Priya", mark:72, course:"Java"},
 {id:4, name:"Arun", mark:95, course:"React"}
]

//Task 1: Print All Students
for(let i=0; i<students.length; i++){
    console.log(students[i].id, students[i].name, students[i].mark, students[i].course);
}


//Task 2: Pass / Fail
for(let i=0; i<students.length; i++){
if(students[i].mark>=50){ // checks whether marks of each stuent is greater than and equal to 50 or not 
    console.log( students[i].name+ " pass");  // if the condition true then prints pass
    
}else{
    console.log(students[i].name+ " fail"); //orelse it prints fail
}
}

//by using for of
for (let s of students){
    if(s.mark>=50){
        console.log(s.name + " " +"pass");
        
    }else{
        console.log(s.name + " fail");
        
    }
}


//Task 3: Grade System
for (let s of students){
    if(s.mark>=90){ //check if marks of each dtudent is greater than equal to 90 or not
        console.log(s.name + " A-grade"); // if its true then prints A-grade
        
    }else if(s.mark>=75){ ////check if marks of each dtudent is greater than equal to 75 or not
        console.log(s.name + " B-grade"); //if its true it will print B-grade
        
    }else if(s.mark>=50){//check if marks of each dtudent is greater than equal to 50 or not
        console.log(s.name+ " C-grade");//if its true it prints c-grade
        
    }else{
        console.log(s.name + " Fail"); //if the above all conditions are false  it prints fail
        
    }
    }


//Task 4: Topper Student
let topper=students[0]; // first we should assume that students[o] means first student in array is topper
for (let s of students){ //s means each student
    if(s.mark>topper.mark){ //so here it checks every student marks with the first student marks
        topper=s; // if the condition is true then the student 's' who got more marks will be the topper 
    }
}
console.log("topper is " + topper.name + "-" +topper.mark );

// Task 5: Course Search
 for( let s of students){ 
    if(s.course==='React'){ // it check each and every student course with react (=== ut checks both value and type)
        console.log(s); // if the condition is true then it prints all detsils of student with react course
        
    }
 }


 //Task 6: Add New Student
 students[students.length]={id:5,name:"Rahul",mark:88,course:"Node JS"};
 for(let s of students){
    console.log(s.id, s.name, s.mark, s.course);
} //we can also use array methods like push and concat(push and concat is used to add the array elements)

//using concat method
students = students.concat({id:5, name:"Rahul", mark:88, course:"Node JS"});
for(let s of students){
    console.log(s.id, s.name, s.mark, s.course);
}


//Task 7: Attendance System
let status="present"; // here status is present so it onlt prints the case "present" statemnet
switch(status){
    case "present":
        console.log("welcome");
        break;
    case "Absent":
        console.log("Mark Absent");
        break;
    case "Leave":
        console.log("Approved leave");
        break;
    default :
        console.log("invalis status"); //or else it prints default statement
        
}


// Task 8: Login System
let username = "admin";
let password = "1234";
let inputUser = "admin";
let inputPassword = "1234";
if(username===inputUser && password===inputPassword){ // it checks whether user name password and equal to input user and input password
    console.log("Login successful"); //if its true then it prints login succesful

}else{
    console.log("Invalid User"); //or else if its false it prints invalid user
    
}

