function countdownGenerator(x) {
  var  timerCount = x + 1;

  // The following is the closure function

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

countdown();
countdown();
countdown();
countdown();
countdown();