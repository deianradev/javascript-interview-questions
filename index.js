console.clear();

function log(data) {
  return console.log(data);
}

/* 
Examples of Palindromes
* racecar
* nurses run
* madam
* eye
* No lemon, no melon
* Red rum, sir, is murder
*/

/* setup our string reverse function */
function reverse(word) {
  return [...word].reverse().join("");
}

function isPalindrome(word) {
  //const re = /[^A-Za-z0-9]/g;
  const re = /[\W]/g;
  const lowercaseAndAlphaNumeric = word.replace(re, "").toLowerCase();
  const reversedWord = reverse(lowercaseAndAlphaNumeric);
  return lowercaseAndAlphaNumeric === reversedWord ? true : false;
}

log(isPalindrome("Red rum, sir, is murderzzzz"));
