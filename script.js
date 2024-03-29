function convertToRoman(num) {
  if (isNaN(num) || num < 1 || num > 3999) {
    return "Invalid input";
  }

  const obj = {
    0:['M',1000], 
    1:['D', 500], 
    2:['C', 100], 
    3:['L', 50], 
    4:['X', 10], 
    5:['V', 5], 
    6:['I', 1]
  };

  let result = "";

  for (let key in obj) {
    const [symbol, value] = obj[key];
    const count = Math.floor(num / value);

    if (count >= 1) {
      result += symbol.repeat(count);
      num -= value * count;
    }

    // Handle subtraction notation
    if (key % 2 === 0 && num >= obj[key + 2][1] - value && key < 6) {
      result += obj[key + 2][0] + symbol;
      num -= obj[key + 2][1] - value;
    }
  }

  return result;
}


// console.log(convertToRoman(36));

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
