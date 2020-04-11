// FizzBuzz Challenge Practice

let printOutputs = ("Fizz", "Buzz") => {

for (i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log("Fizz"); // Fizz
    } else if (i % 5 == 0) {
        console.log("Buzz"); // Buzz
    } else if (i % 3 && i % 5) {
        console.log("FizzBuzz"); // FizzBuzz
    } else {
        console.log(i); // Errrrrrrr...
    }
}

// Pig Latin Practice
    
let pigLatin = (word) => {
    let array = word.split("");
    let vowels = ["a", "e", "i", "o", "u"];
    let newWord = "";
    for (i = 0; i < vowels.length - 1; i++) {
        for (j = 0; j < word.length - 1); j++) {
            if (word[j] === vowels[i]) {
                for (k = j; k < word.length; k++) {
                   newWord = newWord + word[k];
                }
            }   for (n = 0; n < j; n++) {
                   newWord = newWord + word[n];
            }
        }       return newWord + "ay"; // ananabay
    }
}

// Palindrome Practice

let palindrome = (string) => {
    if (string == string.split("").reverse().join("")) {
        console.log(string + "is a palindrome.");
    } else {
        console.log((string) + "is not a palindrome.");
    }
}

let gcDivisor = (integer1, integer2) => {
    let r = 0
    while(integer1 !== 0) {
        r = integer1 % integer2;
        integer1 = integer2;
        integer1 = r;

        return integer2;
    }

 // One Possible Solution

let gcDivisor = (integer1, integer2) => {
    if (!integer2) {
        return integer1;
    }
    return gcDivisor(integer2, integer1 % integer2);
}
   // another possible solution

   let gcDivisor = (integer1, integer2) => {
       for (i = 1; i <= Math.min(integer1, integer2); i++) {
           if (integer1 % i === 0 && integer2 % i === 0) {
               gcDivisor = i; {
                   return gcDivisor;
               }
           }
       }
   }

   // Another Possible Solution

   let gcDivisor = (a, b) => {
       
       // declare two arrays
       
       let divOneArray = []
       let divTwoArray = []

       for (let i = 1; i <= a; i++) {
           if (a % i === 0) {
               divOneArray.push(i);
           }
       }
   }

       for (let i = 1; i<= b; i++) {
           if (b % i === 0) {
               divTwoArray.push(i);
           }
       }

       console.log(divOneArray)
       console.log(divTwoArray)

       let smallArray;
       let bigArray;
       if (divOneArray.length > divTwoArray.length) {
           smallArray = divTwoArray;
           bigArray = divOneArray;
       } else {
           smallArray = divOneArray;
           bigArray = divTwoArray;

           let commonValues = [];

           for (item of smallArray) {
               if (bigArray.indexOf(item)> -1) {
                   commonValues.push(item)
               }
           }
       }
       }
       }  return commonValues(commonValues.length - 1);
       }

       gcDivisor(14, 21)

       let gcDivisor = (a, b) => {
           if (b == 0) {
               return a;
            } else {
                console.log("B =" + b)
                console.log("A % B =" + a%b)
                return gcDivisor(b, a%b);
            }
       }
