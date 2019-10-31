// DOM exercise

let title = document.getElementbyId("nycda-title");

title.innerText = "Welcome to NYCDA";

let helpMessage = document.getElementbyId("nycda-help-message");

helpMessage.innerText = "Ask people in NYCDA for help if you're struggling";

let nycdaClass = document.getElementsbyClass("nycda-class");

console.log(nycdaClass[nycdaClass.length-1]);

let secondPara = document.getElementsbyTagName('p');

console.log(secondPara[secondPara.length-1]);

document.addEventListener("keypress", (e) => {
    console.log(e);
    title.innerText = e.key;
});

// Valid Username and Password Form

let valiForm = document.getElementById("myvalidation");
let emailField = document.getElementById("email");
let userNameField = document.getElementById("username");
let passwordField = document.getElementById("password");
const includesNumber = /[0-9]/;

valiForm.addEventListener("submit", (e) => {
    if((passwordField.value === "12345678" && userNameField.value.match(includesNumber))) {
       console.log("CORRECT");
       title.innerText = "CORRECT";
    } else {
       console.log("INCORRECT")
       title.innerText = "INCORRECT"
}});
e.preventdefault();

// Random DOM JS Code

document.getElementById('myId');

document.getElementsByClassName('myClass');

document.getElementsByClassName('myClass')[0];

let x = document.getElementById('myId');

x = '';

document.getElementsByTagName('span');

let y = document.getElementsByTagName('span');

let firstspan = y[0];

firstspan;

y = '';

firstspan.attributes;

firstspan.attributes["class"];

let myMainHeader =
document.getElementById('myId');

myMainHeader.innerText = "This is my new header value.";

document.getElementById('myId').innerText = "This is my new header two.";

document.getElementById('container').innerText;


let submitButton = document.getElementbyId("submit-button");
let inputBox = document.getElementbyId("input-important");
let title = document.getElementbyId("nycda-title");
submitButton.addEventListener("click", () => {
  console.log(inputBox.value)
  title.innerText = inputBox.value
  e.preventdefault();
 })
