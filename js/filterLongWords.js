var maxLength = 4;

var arrWords = ["Dog", "Cat", "Hippopotamus", "Dinosaur", "Lion", "Ostrich"];
var maxWords = [];

for (var i = 0; i < arrWords.length; i++) {
  if (arrWords[i].length <= maxLength) {
    maxWords.push(arrWords[i])
  }
}

console.log(arrWords);
console.log(maxWords);
