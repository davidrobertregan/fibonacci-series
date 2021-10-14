function fibonacci(num) {
  let fibArr = [0, 1, 1]

  if(num < 3) {
    return fibArr[num]
  }
  
  for(i = fibArr.length; i < num + 1; i++) {
    const element = fibArr[i - 1] + fibArr[i - 2]
      fibArr.push(element)
    }

  return fibArr[fibArr.length - 1]
}

if (require.main === module) {
  // add your own tests in here

  console.log("Expecting: 2");
  console.log("=>", fibonacci(3));

  console.log("Expecting: 8");
  console.log("=>", fibonacci(6));

  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution

// fib takes a num as an argument. the function will then return the nth value based on the number passed in. ie fib(10) will return the 10th element.

// create an array thats the same length as the number... 
// create a loop that will iterate as long as the number 
// 