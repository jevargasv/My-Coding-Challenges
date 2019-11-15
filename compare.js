// Comparing Random Numbers

let compare = (numbers, value) => {
    let lessThan = [];
    let greaterThan = [];
    let equalTo = [];
    
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] < value) 
            lessThan.push(numbers[i]);
        else if (numbers[i] > value)
            greaterThan.push(numbers[i]);
        else if (numbers[i] = value)
            equalTo.push(numbers[i]);
        else
            return "There is nothing to compare, you dingbats!";
      
    }
  }

compare([10, 30, 45, 4, 21, 30], 30);
