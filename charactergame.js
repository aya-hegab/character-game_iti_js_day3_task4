var letter = "i";
var sent = "This is javaScript";

var arrIndex = [];

for (var i = 0; i < sent.length; i++) {
  if (sent[i] === letter) {
    arrIndex.push(i);
  }
}

// var arr = sent.split("");
// for (var i = 0; i < sent.length; i++) {
//   arrIndex.push(arr.indexOf("i"));
// }
// console.log(arr.indexOf("i"));
console.log(arrIndex);
