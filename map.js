
 // EXERCISE MAPPING //

var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var result = input.map(inputTwo => {
  var inputModified = [];
  inputModified = Math.pow(2, inputTwo.x) + Math.pow(2, inputTwo.y);
  inputModified = Math.sqrt(inputModified);
  inputModified = Math.ceil(inputModified);
  return inputModified;
})

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

