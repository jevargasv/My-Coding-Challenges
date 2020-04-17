// Running Sum Problem Practice

let prices = [33, 26, 99, 120, 12, 45];
let sum = 0;

for (let i = 0; i < prices.length; i++) {
  
  sum = sum + prices[i]; 
  console.log("The sum is: ", sum);

}

// Game of Thrones - 99 Crows on the Wall Practice

for (let i = 99; i >= 1; i--) {
    if (i === 1) {
    console.log("1 crow on the wall. 1 single crow. \nIt fell down and became a wight. \nThere's no one left to defend Westeros now.");
    } else {
    console.log(`${i}crows on the wall. ${i}"crows.", \n1 fell down and became a wight. \n${i - 1}"crows on the wall.`);
    }
}

// Counter Problem Practice

let arr = [5,10,5,2,2,1,653,5,90,5,2,7,9,20,43,92,1,74];

   let obj = {};

    (obj[arr[i]] != undefined) ? obj[arr[i]]++ : obj[arr[i]] = 1
    for (let k in obj) {
    console.log(`${k} exists ${obj[k]} times`);
}


let count;

    for (let i = 0; i < arr.length; i++) {
    count = 0;
    if (arr[i] != undefined) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
                if (count !== 1) {
                    delete arr[j];
                }
            }
        }
    }

console.log(arr[i] + "exists" + count + "times");

// You Are a Developer (Reverse) Practice

let str = "yourareadeveloper";

for (let i = str.length-1; i >= 0; i--) {
    newString += str[i];
}
      
s.split("").reverse().join("");

// Variable Conditionals Practice

let num = 20;

if (num < 10) {
    alert("Number is less than 10");
} else {
    alert("Number is greater than 10, the num is" + num);
}

      
