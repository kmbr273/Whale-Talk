const input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];
for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  //console.log("inputIndex = " + input[inputIndex]);
  for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
//console.log("vowelIndex = " + vowels[vowelIndex]);
if (input[inputIndex] === vowels[vowelIndex]){
  if (input[inputIndex] === 'e'){
    resultArray.push('ee');
  } else if (input[inputIndex] === 'u'){
    resultArray.push('ee');
  }
  else {
  resultArray.push(input[inputIndex]);
  }
}
  }
} 
console.log(resultArray.join("").toUpperCase());