console.clear();

function log(data) {
  return console.log(data);
}

//////////////////////////////////////////////////////
/* using split, reverse and join */

function reverse(word) {
  return word
    .split("")
    .reverse()
    .join("");
}
log(reverse('reverse'))

//////////////////////////////////////////////////////
/* using spread operator, reverse and join */
/*
function reverse(str) {
  return [...str].reverse().join("");
}
log(reverse('reverse'))
*/

//////////////////////////////////////////////////////
/*******  using for loop *******/
/*
function reverse(word) {
  let temp = "";
  for(let x = 0; x < word.length; x++) {
    temp = word[x] + temp; 
  }
  return temp;
}
// 1st iteration temp is C: temp = word[0] + ""
// 2nd iteration temp is AC: temp = word[1] + "c"
// 3rd iteration temp is RAC: temp = word[2] + "ac"

log(reverse("car"));
*/

//////////////////////////////////////////////////////
/******  using for loop 2nd way ******/
/*
function reverse(word) {
  let temp = "";
  for (let x = word.length - 1; x >= 0; x--) {
    //temp = temp + word[x];
    temp = temp.concat(word[x]);
  }
  return temp;
}
//1st iteration E
//2nd iteration S
console.log(reverse("reverse"));
*/
