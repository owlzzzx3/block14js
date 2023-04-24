/* jshint esversion: 6 */

function reverseArray(arr) {
    let newArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      newArray.push(arr[i]);
    }
    return newArray;
  }
  
  console.log(reverseArray([1, 2, 3])); // [3, 2, 1]
  console.log(reverseArray([1, 3, 5, 7, 9, 11])); // [11, 9, 7, 5, 3, 1]
  console.log(reverseArray([20, 50, 30, 60, 200])); // [200, 60, 30, 50, 20]
  console.log(reverseArray([1, -1, 2, -3, 5, -8, 13])); // [13, -8, 5, -3, 2, -1, 1]