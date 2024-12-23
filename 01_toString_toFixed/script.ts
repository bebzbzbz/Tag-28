// ======== TOSTRING() ========
console.log("Lvl 1_1");

// console.log(parseFloat("das ist 3")); NaN

// let test = 15;
// let a = test.toString();
// console.log(a);

let valueOne = 15.16698;
console.log("value one");
console.log(valueOne.toString());
console.log(valueOne.toString(2));
console.log(valueOne.toString(8));
console.log(valueOne.toString(16));

let valueTwo = 7.78714;
console.log("value two");
console.log(valueTwo.toString());
console.log(valueTwo.toString(2));
console.log(valueTwo.toString(8));
console.log(valueTwo.toString(16));

let valueThreeS = "12.3";
let valueThree = Number(valueThreeS);
console.log("value three");
console.log(valueThree.toString());
console.log(valueThree.toString(2));
console.log(valueThree.toString(8));
console.log(valueThree.toString(16));

let valueFourS = "3.14random";
let valueFour = parseFloat(valueFourS);
console.log("value four");
console.log(valueFour.toString());
console.log(valueFour.toString(2));
console.log(valueFour.toString(8));
console.log(valueFour.toString(16));

let valueFiveS = "32px";
let valueFive = parseFloat(valueFiveS);
console.log("value five");
console.log(valueFive.toString());
console.log(valueFive.toString(2));
console.log(valueFive.toString(8));
console.log(valueFive.toString(16));

let valueSixB = true;
let valueSix = Number(valueSixB);
console.log("value six");
console.log(valueSix.toString());
console.log(valueSix.toString(2));
console.log(valueSix.toString(8));
console.log(valueSix.toString(16));

let valueSevenB = false;
let valueSeven = Number(valueSevenB);
console.log("value seven");
console.log(valueSeven.toString());
console.log(valueSeven.toString(2));
console.log(valueSeven.toString(8));
console.log(valueSeven.toString(16));

let valueEightS = "321";
let valueEight = Number(valueEightS);
console.log("value eight");
console.log(valueEight.toString());
console.log(valueEight.toString(2));
console.log(valueEight.toString(8));
console.log(valueEight.toString(16));

let valueNineS = "Supercode";
let valueNine = parseFloat(valueNineS);
console.log("value nine");
console.log(valueNine.toString());
console.log(valueNine.toString(2));
console.log(valueNine.toString(8));
console.log(valueNine.toString(16));

// ======== TOFIXED() ========
console.log("Lvl 1_2");
console.log(valueOne.toFixed(2));
console.log(valueTwo.toFixed(2));
console.log(Number(valueThreeS).toFixed(2));
console.log(Number(valueSixB).toFixed(2));
console.log(Number(valueSevenB).toFixed(2));
console.log(Number(valueEightS).toFixed(2));
console.log(parseFloat(valueNineS).toFixed(2));