"use strict";

const pathA = document.querySelector('.pathA');
const pathB = document.querySelector('.pathB');

console.log(pathA);


console.log(splitThePath(pathA));

// gets path "d" attribute and splits into array by each individual number/letter (parses numbers into floats)
function splitThePath(pathToClean){
  let arraySplit = [];
  let path = pathToClean.getAttribute('d');
  let splitIt = path.split(" ");
      splitIt.forEach(function(element, index){
      element.match(/[a-zA-Z]/) ? arraySplit.push(element) : arraySplit.push(parseFloat(element));
      })
return arraySplit;
}
