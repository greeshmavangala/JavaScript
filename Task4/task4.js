//LEVEL 1 (Basic Practice)
    //Task 1: Array Basics
    let arr = [10, 20, 30, 40, 50];
    console.log(arr[0]);
    console.log(arr[arr.length-1]);
    console.log(arr.length);


    //Task 2: Push & Pop
    let arr1 = [1,2,3];
    arr1.push(4,5);
    arr1.pop();
    console.log(arr1);

    // Task 3: Includes Check
    let arr2 = ["html","css","javascript","react"];
    let arr3=arr2.includes("javascript");
    console.log(arr3);

//LEVEL 2 (Intermediate)
    //Task 4: Filter Salaries
    let emp = [ {name:"A", salary:10000},{name:"B", salary:50000},{name:"C", salary:30000}];
    let result = emp.filter(e =>
         e.salary > 20000
        );
    console.log(result);


    //Task 5: Map Names
    let names = emp.map(e => e.name);
    console.log(names); 


    //Task 6: Reduce Sum
    let total = emp.reduce((sum, e) => {
        return sum + e.salary
    }, 0);
    console.log(total); 


// LEVEL 3 (Logic Building)
    //Task 7: Remove Duplicates
    let arr5 = [1,2,2,3,4,4,5];
    let unique = []; 

    for (let i = 0; i < arr5.length; i++) {
        if (!unique.includes(arr5[i])) { 
            unique.push(arr5[i]);
        }
    }
    console.log(unique);


    //Task 8: Find Largest Number
    let arr4 = [10, 200, 5, 90];
    let max = arr4[0]; 
    for (let i = 1; i < arr4.length; i++) {
        if (arr4[i] > max) {
            max = arr4[i];
        }
    }
    console.log(max);


    //Task 9: Reverse String WITHOUT reverse()
    let str = "hello";
    let reverseStr = "";
    for(let i = str.length - 1; i >= 0; i--){
        reverseStr += str[i];
    }
    console.log(reverseStr); 


//LEVEL 4 (Advanced Thinking)
    // Task 10: Group by Salary
    let empl = [{name:"A", salary:10000},{name:"B", salary:50000},{name:"C", salary:10000}];
    let grouped = {};
    for (let i = 0; i < empl.length; i++) {
        let salary = empl[i].salary;
        let name = empl[i].name;
        if (!grouped[salary]) {

            grouped[salary] = [];

        }
        grouped[salary].push(name);
    }
    console.log(grouped);



    //Task 11: Flatten Array (without flat)
    let k = [1,[2,[3,[4]]]];
    function flatten(k) {
        let result1 = [];
        for (let item of k) {
            if (Array.isArray(item)) {
                result1 = result1.concat(flatten(item));
            } else {
                result1.push(item);
            }
        }
        return result1;
    }
    console.log(flatten(arr)); // [1,2,3,4]


    //Task 12: Custom Sort (Descending)
    let a = [5,2,9,1];
    a.sort((a,b) => {
        b - a
    });
    console.log(a);


    // Task 13: Find Second Largest
    let b = [10, 50, 20, 40];
    let sortedarr = [...b].sort((a,b) =>{
         b - a
    });
    console.log(sortedarr[1]);


    //Task 14: Count Characters
    let count = {};
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    console.log(count);
    
    

    

    
    
    