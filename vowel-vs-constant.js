/* jshint esversion: 6 */

function countConsonantsAndVowels(str) {
    let consonants = 0;
    let vowels = 0;
    
    for (let i = 0; i < str.length; i++) {
      if (/[aeiou]/.test(str[i])) {
        vowels++;
      } else if (/[a-z]/.test(str[i])) {
        consonants++;
      }
    }
    
    console.log(`${str} has ${consonants} consonants and ${vowels} vowels`);
  }
  
  countConsonantsAndVowels("hello"); // "hello has 3 consonants and 2 vowels"
  countConsonantsAndVowels("ukelele"); // "ukelele has 3 consonants and 4 vowels"
  countConsonantsAndVowels("awesome"); // "awesome has 3 consonants and 4 vowels"
  countConsonantsAndVowels("onomonopia"); // "onomonopia has 4 consonants and 6 vowels"
  countConsonantsAndVowels("textbook"); // "textbook has 5 consonants and 3 vowels"
  