
// EXERCISE 1


function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(num) {

  console.log("Found " + "Waldo" + " at index: " + num + "!");
}


findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


// EXERCISE 2


function findWaldo(arr, found) {
  arr.forEach(function(element, i) {
    if (element === "Waldo") {
      found(element, i)
    }
  })
}

function actionWhenFound(item, index) {

  console.log("Found " + item + " at index: " + index + "!");

}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);



// // TEST
// const items = ['item1', 'item2', 'item3'];
// const copy = [];

// items.forEach(function(item){
//   copy.push(item)
// });

// console.log(copy)

