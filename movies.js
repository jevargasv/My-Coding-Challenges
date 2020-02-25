// Random JS Functions for Practice

function nycdaWelcome(name) {
    return `Welcome to NYCDA ${name}! Enjoy your stay!`;
  }
  
  function brokenCalculator(numOne, numTwo) {
    return numTwo * 3;
  }
  
  function lineThemUp(numOne, numTwo, numThree) {
    return [numOne, numTwo, numThree];
  }
  
  // Arrow Functions for Practice

  let funcName = (params) => params + 2
  let funcName = () => 2
  
  let funcName = (params) => {
    let x = 5
    return params
  }
  funcName();
  
  let defaultArgs = (argOne, argTwo = 5) => {
    return argOne + argTwo;
  }
  
  defaultArgs (1,1)
  
  function multiplyByThree(number) {
    return number * 3;
  }
  
  function addTwo(number) {
    return number + 2;
  }
  
  function addTwoMultiplyByThree(number) {
    return multiplyByThree(addTwo(number))
  }
  
  let multiplyByThree = (number) => number * 3
  let addTwo = (number) => number+2
  let addTwoMultiplyByThree = (number) => multiplyByThree(addTwo(number))

  addTwoMultiplyByThree();
  
  addTwoMultiplyByThree(10) // 36
  addTwoMultiplyByThree(2) // 1

// Scoping for Practice

let name = "david"
let myAge = 894093

let scopeCheck = () => {
  let myAge = 800;
  return name + "patlut";
}

let other = () => {
    // console.log(myAge)
    let myAge = 900;
    console.log(myAge);
}

scopeCheck() // david patlut

let name = "denisse" // will give you an error because it's already defined in the global scope 
console.log(myAge);

// AVOID!

let test = () => {
    let x = 50;
    if(x > 30) {
        let blockscope = "This is block scoped."
        console.log ('Blah') }
    else {
        console.log('blah');
        console.log(blockscope);
    }
    }
}

test();

// Pet Name

function petName(name) {
    return "My pet's name is " + name
  }
  
  // this works
  petName("Optimus Prime")
  // this also works
  petName("Optimus Prime")
  
  function petName(name) {
    return "My pet's name is " + name
  }

  x = 5;
  let x = 6;

  console.log(x)

  let royalizer = (gender, name) => {
    if(gender === "female") {
    return `Her Majesty, ${name}`
    } else if(gender === "male") {
      return `Her Majesty, ${name}`
    } else {
      return `Their Majesty, ${name}`
    }
  }
  
  royalizer("Jenny", "female")
  
  let magicDoor = (door) => {
      (door === 1) {
      alert (`will give you a brand new car!`)
      (door === 2) {
      alert (`will give you a nycda t-shirt!`)
      (door === 3) {
      alert (`will turn into a blackhole and teleport you to Antartica`)
      }
    
  let chooseDoor = (door) => {
     return magicDoor(door);
  }
  console.log(chooseDoor(3));
  
  function add(argument1, argument2) {
    return argument1 + argument2
  }
  
  function multiply(argument1, argument2) {
    return argument1 * argument2
  }
  
  function doTwoThings(argument1, argument2, firstFunction, secondFunction) {
    return secondFunction( firstFunction(argument1, argument2), 5)
  }
  
  let add = (numOne, numTwo) => numOne + numTwo
  let multiply = (numOne, numTwo) => numOne * numTwo
  
  let doTwoThings(argOne, argTwo, firstFunc, secondFunc) => {
    return secondFunc(firstFunc(argOne, argTwo), 5)
  }
  
  doTwoThings(2, 3, add, multiply) 

  function functionWithinAFunction() {
    function logStuff() {
      console.log("Logging stuff")
    }
  
    return logStuff()
  }
  
  functionWithinAFunction()
  
  let closure = (argName) => {
    let closureVar = "Jenny"

    let logStuff = () => {
      let logStuffScope = "Patlut"
      console.log(name)
    }
  
    return logStuff();
  }
  
  closure();

  let fibo = (n) => {
    if (n === 1) {
      return [0 ,1];
    if (n === 2) {
    // else if(n === 2) {
    }
      return [1 ,1]
    } else {
      // return fibo(n-1) + fibo(n-2)
      let s = fibo(n - 1);
      s.push(s[s.length - 1]) + s[s.length - 2]);
      return s;
    }
  };
  
  console.log(fibo(8));
  
  // One possible solution
  
  let fibonacciSequence = n => {
      if (n === 1)
          return [1]
      if (n === 2)
          return [1, 1]
      let s = fib(n - 1),
          len = s.length 
      s.push(s[len - 1] + s[len - 2])
      return s
  }
  
  // Two possible solutions
  
  const fibo = length => {
      if (length == 1)
          return [0]
      let arr = fibo(length - 1)
      arr.push(arr[arr.length - 1] + arr[arr.length - 2] || 1)
      return arr
  }
  
  console.log(fibo(8)) // 0, 1, 1, 2, 3, 5, 8, 13
  
  function fibonacci(n) {
    let fibo = [0, 1];
  
    if(n === 0) return 0
    //if (n <= 3) return 1;
  
    for (let i = 2; i <=n; i++) {
      fibo[i] = fibo[i-1]+fibo[i-2];
    }
  }

  let moviesFlight = (movieLengths, flightLengths) => {
    for (i = 0, i < movieLengths.length; i++) {
      for (j = i + 1, j < movieLengths.length; j++) {
        if (movieLengths[i] + movieLengths[j]) === flightLengths {
          return true;
        } else {
          return false;
        }
      }
    }
  }
  console.log(moviesFlight(int, flightLengths))
