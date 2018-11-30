var words = ["ground", "control", "to", "major", "tom"];

function map(array, callback) {
  var arrayMod = [];
  for (var i = 0; i < array.length; i++){
    // console.log(array);
    arrayMod.push(callback(array[i]));
  }
    console.log(arrayMod);
}


map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});


