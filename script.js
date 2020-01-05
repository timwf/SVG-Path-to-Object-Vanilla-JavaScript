"use strict";

const pathA = document.querySelector('.pathA');
const pathB = document.querySelector('.pathB');

console.log(pathA);


intoObj(splitThePath(pathA));

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

function intoObj(pathSplit){
  let newArray = [];
for (var i = 0; i < pathSplit.length; i++) {
  if (typeof pathSplit[i] == "string") {
    console.log('worksss ' + pathSplit[i]);

  }
  //console.log(pathSplit[i]);

}
}
