const myArray = [1, 2, 3, 4, 5];
let newArray = [];

function invertArray(array) {
  for (let i = 0; i < array.length; i++) {
    newArray[array.length - i - 1] = array[i];
  }
}

invertArray(myArray);

console.log(newArray);
