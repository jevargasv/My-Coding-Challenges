let array = [2, -18, 29, -34, 42, -51]; 
let greatestSum = newArray => {
 let highSum = 0;
  let nextSum = 0;
   for(let i = 0; i < array.length; i++) {
   for(let j = 0; j < array.length; j++) {
     nextSum += array[j];
     if (nextSum > highSum) {
         highSum = nextSum;
         highSum = newArray;
     }
  }   
}
}
return greatestSum = [highSum];

let testArr = [-1, 30, 70, 500, -9, 5];
let greatestSum = (arr) => {
    arr.sort((a,b) => a - b);
    return arr[arr.length - 1] + arr[arr.length - 2]
}

greatestSum(testArr);


let removeDuplicateChar = (string) => {
    let mapping = {};
    let newString = '';
    for(let i= 0; i < string.length; i++) {
      if (!(string[i] in mapping)) {
        newString += string[i];
        mapping[string[i]] = true;
      }
    }
}
  return newString;

console.log(removeDuplicateChar("Learn more javascript dude"));

let testStr = "Learn more dudel"

let removeDuplicateChar = (str) => {
    let counter = {}
    str = str.split("")
    console.log(str)

    for(i of str) {
        if(counter[i.toLowerCase()] == undefined && i != "") {
            counter[i] = 1;
        }
    }
}

console.log(counter);
