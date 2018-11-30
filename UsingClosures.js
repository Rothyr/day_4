

// EXERCISE ONE //

function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var dice;
  var i = 0;

return function() {
  dice = list[i];
  i++;
  return dice;

return die

  }

}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());



// EXERCISE TWO //

function countdownGenerator(x) {
  var  timerCount = x + 1;


  return function() {

  if (timerCount > 1) {
      timerCount --;
      console.log("T-Minus: " + timerCount);

    } else if (timerCount === 1) {
      timerCount --;
      console.log("Blast Off!!!");

  } else {
    console.log("Rockets already gone, bub!");
    }
  }
};

var countdown = countdownGenerator(3);


countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
