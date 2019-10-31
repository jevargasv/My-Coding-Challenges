// Random JS Code

alert ('Hello World!');

let myGrade = 90;
const myName = "Jennifer";
let awesomeClass = true;
awesomeClass = false;

let myName = "Jennifer";
let myAge = 27;
myName + myAge; // "Jennifer27"
myAge + true; // 27
myAge + false; // 28
myName + true; // "Jennifertrue"

let listOfFood = [
    "carrots",
    "bacon",
    "milk",
    "parsley",
];

let x = "jennifer";

listOfFood[0] = "carrots";
listOfFood[3] = "parsley";

let ticTacToe = [
  ["x", "o", "x"],
  ["x", "x", "o"],
  ["o", "o", "x"]
];

let random = [
  ["hello", "goodbye", "food"],
  ["something", "else", "here"],
  ["beans", "fruit", "veggies"]
];

let myClass = [
    "Sharna", 
    "Anna", 
    "Mariia",
    "Imani", 
    "Ben",
]

myClass[4] = // "Ben"

random[2][0] // "beans"

let person = {
    firstName : "Orlando",
    lastName: "Caraballo",
    age: 34,
    favoriteMovies: [
      "Interstellar",
      "The Matrix",
      "Eternal Sunshine of a Spotless Mind"
    ]
};

  person.firstName // "Orlando"

  person['firstName'] // "Orlando"

  person.age // 34

  person.favoriteMovies[0] // "Interstellar"

  person.age = 24 // 24

  person.hobby = "Photography" // "Photography"

  let myBody = {
    name: "Jennifer",
    eyeColor: "Dark Blue",
  }

  myBody.eyeColor = "brown" // "brown"

  myBody.hairColor = "blonde"; // "blonde"

  let myTopMovies = {
      topMovieOne: "Wall-E",
      topMovieTwo: "Titanic",
      topMovieThree: "Pulp Fiction"
  };

console.log("My favorite movies are" + myTopMovies.topMovieOne + "and" + myTopMovies.topMovieTwo + "but I really enjoy" + myTopMovies.topMovieThree + ".");


let y = 10;
let z = 15;
// y + z = 25;

letmyNum = 24;

myNum++ // 24

myNum // 25

myNum+=1 // 26

myNum = myNum + 1

10 % 3 // 1
5 % 2 // 1

let mathOne = 20
let mathTwo = 3

let mathSum = mathOne + mathTwo// 23
let mathProduct = mathOne * mathTwo // 60

5 >= 2 // true
5 >= 5 // true
5 >= 6 // false

5 > 2 && 5 > 3 // true
5 > 2 && 5 > 6 // false
5 > 2 && 5 > 6 && 5 > 3 // false

5 > 2 || 5 > 6 // true
5 > 2 || 5 > 6 || 5 > 7 // true
5 > 2 || 5 > 6 && 5 > 3 // true
5 > 2 || 5 > 6 && 5 > 3 || 5 > 10 // true

let number = 100

if (number > 10) {
    console.log('Hello World');
}

if ((number > 10) && (number < 200)) {
    console.log('Execute the code in here');
}

if (number < 3) {
    let thiswillnotrun = "Whatever";
    console.log(thiswillnotrun);
} else if (number > 5) {
    let thiswillrun = "Whatever";
    console.log(thiswillrun);
} else {
    let thisismyfallback = "Whatever";
    console.log(thisismyfallback);
}

switch (0) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case "6":
    day = "Saturday";
    break;
}

for (let i = 0; i < 10; i++) {
    console.log("Hello Class");
}

let array = [14, 35, -26, 44]

for (let i = 0; i < array.length; i++) {
    console.log(array[i]); // 14, 35, etc...
}

let table = {
    height: "4ft",
    width: "3ft",
    depth: "2ft"
};
  
  // allows you to loop over object properties
  for (let i in table) {
    console.log(table[i] + " "); // 4ft 3ft 2ft
  }

  let number = 1

// will loop until the conditional becomes true
while(number <= 15) {
  console.log("JS is cool") // will display this 15 times
  number++
}
/*
  This can be used to loop over arrays but for loops are more clear
*/

let pluses = "++++++++++"

for (let i = 0; i < 10; i++) {
  console.log(pluses);
  pluses = pluses.slice(0, -1);
  console.log(pluses.slice(i));
}

for (let i = 0; i < 10; i--) {
  console.log("+".repeat(i));
}
