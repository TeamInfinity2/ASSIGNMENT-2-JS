// alert("hello world")
// var num1 = "5";
// var num2 = 7;
// var num1 = +prompt("enter the 1st digit");
// var num2 = +prompt("enter the 2nd digit")
// console.log(num1 * num2)

// var totalNum = num1  * num2;
// alert(totalNum)
// var heading = "<h1>hello world </h1>";
// document.write(heading)
// var num = 1;
// alert("You have visited my site " + num + " times")
// var num = 5;
// alert(num)
// num--;
// alert(num)
// num--;
// alert(num)

// let x = 5;
//  let y = 3;
//  let result = x+y;

//  let firstName = "john";
//  let lastName = "doe";
//  let fullname = "firstName" + "lastName"
// console.log(fullname)

// ===assignment3====
// Q1
// var a = 10
// alert("the value of a is 10")
// ++a;
// alert("the value of ++a is 11")
// a++;
// alert("the value of a++ is 12")
// --a;
// alert("the value of --a is 11")
// a--;
// alert("the value of a is 10")
// q2
// var a=2,b=3;
// var result = --a - --b + ++b + b--;
// --a;
// alert("1")
// --a - --b;
// alert("-1")
// --a - --b + ++b;
// alert("3")
// --a - --b + ++b + b--;
// alert("1")
// Q3
// function greet(name) {
//     return "Hello, " + name;
// }
// console.log(greet("Alice")); 
// Q4
// let name = +prompt("Enter your name:");
// document.write(`<h1>Hello, ${name}!</h1>`);
// Q5
// let num = +prompt("Enter a number:");
// if (num === null || num === "") {
//   num = 5;
// }
// document.write(`<h1>Multiplication Table of ${num}</h1>`);
// for (let i = 1; i <= 10; i++) {
//   document.write(`${num} x ${i} = ${num * i}<br>`);
// }
// Q6
// A
// let subject1 = +prompt("Enter subject 2 name:");
// let subject2 = +prompt("Enter subject 2 name:");
// let subject3 = +prompt("Enter subject 3 name:");
// B
// let obtainedMarks1 = +prompt(`Enter obtained marks for ${subject1}:`);

// document.write(`<h1>Subjects and Marks</h1>`);
// document.write(`<p>${subject1}: ${obtainedMarks1}/${100}</p>`);
// document.write(`<p>${subject2}: ?/${100}</p>`);
// document.write(`<p>${subject3}: ?/${100}</p>`);
// // D
// let obtainedMarks2 = +prompt(`Enter obtained marks for ${subject2}:`);
// let obtainedMarks3 = +prompt(`Enter obtained marks for ${subject3}:`);
// let totalObtainedMarks = parseInt(obtainedMarks1) + parseInt(obtainedMarks2) + parseInt(obtainedMarks3);
// let totalMarks = 100 * 3; // Total marks for 3 subjects
// let percentage = (totalObtainedMarks / 100) * 100;

// document.write(`<h1>Result</h1>`);
// document.write(`<p>Total Marks: ${100}</p>`);
// document.write(`<p>Total Obtained Marks: ${totalObtainedMarks}</p>`);
// document.write(`<p>Percentage: ${percentage.toFixed(2)}%</p>`);


// ====ASSIGNMENT 4===>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let cityName = +prompt("enter your city name");


// let city = prompt("Enter the name of your city:");


// if (city.toLowerCase() === "karachi") {
//     alert("Welcome to the city of lights!");
// } else {
//     alert(`Welcome to ${city}!`);
// }
// Q2
// let gender = prompt("Enter your gender (male/female):");

// if (gender.toLowerCase() === "male") {
//     alert("Good Morning Sir.");
// } else if (gender.toLowerCase() === "female") {
//     alert("Good Morning Ma’am.");
// } else {
//     alert("Good Morning!");
// }
// Q3
// let signalColor = prompt("Enter the color of the traffic signal (Red/Yellow/Green):");

// if (signalColor.toLowerCase() === "red") {
//       alert("Must Stop");
//     document.write("<p style='color: red;'> <b>Must Stop<b></p>");
  
// } else if (signalColor.toLowerCase() === "yellow") {
//     alert("Ready to move");
//     document.write("<p style='color: yellow;'> <b>Ready to Move<b></p>");

// } else if (signalColor.toLowerCase() === "green") {
//     alert("Move now");
//     document.write("<p style='color: green;'> <b>Move Now<b></p>");

// } else {
//     alert("Invalid color entered.");
//     document.write("<p style='color: black;'>Invalid color entered.</p>");
// }
// Q4
// let remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));

// if (remainingFuel < 0.25) {
//     alert("Please refill the fuel in your car.");
//     document.write("<p style='color: red;'> Please Refill.</p>");

// } else {
//     alert("You have enough fuel.");
// }
// Q5-A
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// Q5-B
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// Q5-C
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }
// Q5-D
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// Q5-E
// if (true) {
//     alert("True");
// }
//  
// q5-f
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

// Q6
// function calculateGrade(percentage) {
//     let grade, remarks;
//     if (percentage >= 80) {
//         grade = 'A-one';
//         remarks = 'Excellent';
//     } else if (percentage >= 70) {
//         grade = 'A';
//         remarks = 'Very good';
//     } else if (percentage >= 60) {
//         grade = 'B';
//         remarks = 'You need to improve';
//     } else {
//         grade = 'Fail';
//         remarks = 'Sorry';
//     }
//     return { grade, remarks };
// }

// function calculateResults(marks1, marks2, marks3) {
//     const totalMarks = 300; // Total marks for three subjects
//     const obtainedMarks = 219;
//     const percentage = (obtainedMarks / totalMarks) * 100;
//     const { grade, remarks } = calculateGrade(percentage);

//     return {
//         totalMarks,
//         obtainedMarks,
//         percentage: percentage.toFixed(2), // Keeping two decimal places
//         grade,
//         remarks
//     };
// }
// Q7 GUSESS THE GAME
// const secretNumber = Math.floor(Math.random() * 10) + 1; // Secret number between 1 and 10
// const userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Try again!");
// }

// Q8
// const number = parseInt(prompt("Enter a number:"));

// if (number % 2 === 0) {
//     alert("The number is even");
// } else {
//     alert("The number is odd");
// }

// Q9

// const number = parseInt(prompt("Enter a number:"));

// if (number % 3 === 0) {
//     alert("The number is divisible by 3");
// } else {
//     alert("The number is not divisible by 3");
// }

// Q10
// const temperature = parseInt(prompt("Enter the temperature:"));

// if (temperature > 40) {
//     alert("It is too hot outside.");
// } else if (temperature > 30) {
//     alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//     alert("Today’s Weather is cool.");
// } else if (temperature > 10) {
//     alert("OMG! Today’s weather is so Cool.");
// } else {
//     alert("It's quite cold outside.");
// }
// Q11

// const num1 = parseFloat(prompt("Enter the first number:"));
// const num2 = parseFloat(prompt("Enter the second number:"));
// const operation = prompt("Enter the operation (+, -, *, /, %):");

// let result;

// if (operation === "+") {
//     result = num1 + num2;
// } else if (operation === "-") {
//     result = num1 - num2;
// } else if (operation === "*") {
//     result = num1 * num2;
// } else if (operation === "/") {
//     result = num1 / num2;
// } else if (operation === "%") {
//     result = num1 % num2;
// } else {
//     alert("Invalid operation");
// }

// if (result !== undefined) {
//     alert(The result is: ${result});
// }