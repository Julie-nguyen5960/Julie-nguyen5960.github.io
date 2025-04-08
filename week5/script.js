// string variables = use quotes
let myName = "julie";
let myID = "s12345";
let myNewName = "melbourne";
let myCity = "Perth";

//  number variables
let num = 100;
let num2 = parseInt("20");
let sum = num - num2;
console.log("total is", sum);

//  + for addition as well as joining text
//  -b for subtraction
//  * for multiplication
//  / division

const weather = "sunny";
const grade = 80;

if (grade == "80") {
  console.log("I got distinction");
} else {
  console.log("YOU FAILED");
}

// if(weather === "sunny") {
//     console.log("today is sunny weather");
// } else {
//     console.log("too bad no sun today");
// }

const msg = `<h1> Todays weather is ${weather}
<p> this is so nice to see the sun again </p>
</h1>`;
console.log(msg);

//  boolean variables- true or false
let isThisEvening = false;
let isThisRMIT = true;

// object variables {name: value     name:value}
const myStudentDetails = {
  name: "julie",
  id: 1234,
  homeTown: "Melbourne",
};

let array = [2, 4, 6, 8, 10];
console.log(array[3]);
let student1 = "Julie";
let student2 = "Eva";
console.log(student1, student2);

//For loop
let studentArray = ["Julie", "Eva", "An", "Marco", "Erza"];
// console.log(studentArray[2]);
// console.log(studentArray[0]);

for (let i = 0; i < studentArray.length; i++) {
  console.log("HELLO", student1.Array[i]);
}

console.log(myStudentDetails);
console.log("my hometown is", myStudentDetails.homeTown);

console.log("Hi");
console.log("how are you buddy?");
// this is a comment

// this is another comment
console.log("hi, i am", myName);
console.log("Hi, my student id is", myID);
myName = "abcd";
console.log("Hi, I am", myName);
// let myNewName = prompt("what is your name");

console.log("hello", myNewName);
console.log("Hello", myNewName, myCity);

// if you know that the vaue is not going to change, define it using const
// or else use let
{
  let a = 10;
  console.log("Hello", a);
}

function whatIsMyGrade(marks) {
  if (marks < 40) {
    console.log("sorry you failed");
  } else if (marks > 80) {
    console.log("you got HD");
    //console/log("you got HD");
    return "HD";
  } else {
    return "pass";
  }
}

let myMarks = 54;
let myGrade = whatIsMyGrade(myMarks);
console.log(myGrade);
let total = add(10, 20);
console.log(total);
total = add(a, b);
console.log(total);
total = subtract(a, b);
