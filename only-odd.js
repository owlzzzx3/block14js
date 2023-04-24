/* jshint esversion: 6 */

function onlyOdds(numbers) {
	let newArray = [];
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] % 2 !== 0) {
			newArray.push(numbers[i]);
		}
	}
	return newArray;
}

let myArray = [2, 4, 6, 8, 11, 20, 15, 22];
let oddArray = onlyOdds(myArray);
console.log(oddArray); // [11, 15]


function onlyOdds(numbers) {
    let odds = numbers.filter(number => number % 2 !== 0);
    return odds.length === 1 ? odds : odds;
  }
  
  let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let expected1 = [1, 3, 5, 7, 9];
  let result1 = onlyOdds(input);
  
  console.log("Input: ", input);
  console.log("Expected Output: ", expected1);
  console.log("Actual Output: ", result1);


  function onlyOdds(arr) {
    const result = arr.filter(num => num % 2 !== 0 && num);
    return result.length === 1 ? [result[0]] : result;
  }
  
  const inputArr = [70, 42, 55, 81, 21, 91, 34];
  const expected2 = [55, 81, 21, 91];
  
  const result2 = onlyOdds(inputArr);
  
  console.log(result2); // [55, 81, 21, 91]
  console.log(result2.toString() === expected2.toString()); // true


  function onlyOdds(arr) {
    let result = arr.filter(num => num % 2 !== 0);
    if (result.length === 0) {
      return result;
    } else if (result.length === 1) {
      return result;
    } else {
      return result;
    }
  }
  
  console.log(onlyOdds([2, 4, 6, 8, 10, 11, 12])); // expected output: [11]
