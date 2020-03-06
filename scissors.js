// Rock/Paper/Scissors JS Game Practice

let gameOver = false;
let computerChoices = ["rock", "paper", "scissors"];

function randomFrom(array) {
    return array[(Math.ceil(Math.random()*3))];
}


function checkInput(input, computerChoices) {
  if (input === "quit") {
    return true;
  }
  
  let computerChoice = randomFrom(computerChoices);
  
if(computerChoice === "rock" && input === "scissors"){
    alert("You win!");
    return true;
} else if (computerChoice === "scissors" && input === "paper"){
    alert("You win!");
    return true;
} else if (computerChoice === "paper" && input === "rock"){
    alert("You win!");
    return true;
}

alert("You win!");
return true;
}

function start(gameOver, computerChoices) {
  while (!gameOver){
    let playerInput = '';
    prompt("Hi! Enter rock/paper/scissors to play, or quit to stop playing.");
gameOver = checkInput(playerInput, computerChoices);
playerInput = "rock";

} 
}



start(gameOver, computerChoices)  

// NYCDA Spy Encoder

/**
Javascript features and functions in use: 
- FOR OF Loop:    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
- FOR IN Loop:    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
- CHARCODEAT:     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
- FROMCHARCODE:   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
- ARRAY JOIN:     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
**/

function encode(word) {
  //somewhere to setore the converted characters
  let result = {};
  //next we loop over each character in the string.
for(let position of word){
  //and save the charcode to the array
  result.push(word.charCodeAt(position-1));
}
// and return that list of codes, separated by colons
return result.list.join(':');
}

function decode(hash) {
  //split the code by semicolons!
let arr = hash.splt(':');
// again somewhere to put our codes
let result = {};
//loop over the codes
for(let code of arr){
  //changke the ode back to the string character equivalent
  result.push(String.fromCharCode(code+1));
  }
  return result.list.join('');
}


let message = "I'm trying to send this secret message.";
let encodedMessage = encode(message);
let decodedMessage = decode(encodedMessage);


console.log(message);
console.log(encodedMessage);
console.log(decodedMessage);

// Converting Celsius to Fahrenheit

function cToF(celsius) 
{
	  const cTemp = celsius;
	  const cToFahr = cTemp * 9 / 5 + 32;
	  const message = `${cTemp}\xB0C is ${cToFahr} \xB0F.`;
	    console.log(message);
	}
	
	function fToC(fahrenheit) 
	{
	  const fTemp = fahrenheit;
	  const fToCel = (fTemp - 32) * 5 / 9;
	  const message = `${fTemp}\xB0F is ${fToCel}\xB0C.`;
	    console.log(message);
	} 
	cToF(60);
        fToC(45);

  let arr = [1, 0, 21, 2, 506, 9, 67];

  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  console.log("Array:: ", arr);

  let arr = [1, 0, 21, 2, 506, 9, 67];

  a.sort(function (a, b) {
    return a - b;
});

console.log('a,', a);

function binarySearch(arr, i) {
    let mid = Math.floor(arr.length / 2);
    console.log(arr[mid], i);

    if (arr[mid] === i) {
        console.log('match', arr[mid], i);
        return arr[mid];
    } else if (arr[mid] < i && arr.length > 1) {
        console.log('mid lower', arr[mid], i);
        binarySearch(arr.splice(mid, Number.MAX_VALUE), i);
    } else if (arr[mid] > i && arr.length > 1) {
        console.log('mid higher', arr[mid], i);
        binarySearch(arr.splice(0, mid), i);
    } else {
        console.log('not here', i);
        return -1;
    }

}

// Tip Amount
let tipAmount = (50, 5, 50); // "$1 per person".

function calc() {
  var bill = $("#bill").value;
  var tip = bill * .15;
  var total = bill + tip;

  document.getElementById("tip").innerHTML= "$"+(tip).toFixed(2);
  document.getElementById("total").innerHTML= "$"+(total).toFixed(2); 


let parser = ("a", "aaaa3fvsdfr"); => // 4


/* Down vote;
You could use split() to modify your code like this:
*/

var newstring = string.match(/set=[^ ]+/)[0].split(".")[1];
