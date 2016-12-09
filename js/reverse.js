var inputString = 'building';
var stringArr = [];
stringArr = inputString.split("");
console.log(stringArr);
var reverseArr = [];

for (var i = stringArr.length-1; i >= 0; i--) {
  reverseArr.push(stringArr[i]);
}
console.log(reverseArr);
