//\\-****---problem-1---****-//\\

function radianToDegree(radian) {
  let pi = Math.PI;
  const degree = radian * (180 / pi);
  if (typeof radian == "number") {
    return degree.toFixed(2);
  } else {
    return "input a valid number";
  }
}
console.log(radianToDegree("input a number"));
// console.log(radianToDegree(199));

//_\\---------problem-1-done------------//_\\

//\\-****---problem-2---****-//\\

function isJavaScriptFile(fileName) {
  if (typeof fileName == "string") {
    if (fileName.endsWith(".js")) {
      return true;
    } else {
      return false;
    }
  } else {
    return "input valid filename";
  }
}
console.log(isJavaScriptFile("input a filename"));
// console.log(isJavaScriptFile("index.js"));

//_\\----------problem-2-done---------------//_\\

//\\-****---problem-3----****-//\\

function oilPrice(disel, petrol, octen) {
  let diselPrice = disel * 114;
  let petrolPrice = petrol * 130;
  let octenPrice = octen * 135;
  let totalCost = diselPrice + petrolPrice + octenPrice;
  if (
    typeof disel == "number" &&
    typeof petrol == "number" &&
    typeof octen == "number"
  ) {
    return totalCost;
  } else {
    return "input 3 valid numbers";
  }
}
console.log(oilPrice("input 3 numbers"));
// console.log(oilPrice(0, 2, 3));

//_\\----------problem-3-done---------------//_\\

//\\-****---problem-4---****-//\\

function publicBusFare(numberOfPeople) {
  if (typeof numberOfPeople == "number") {
    let busRemaining = numberOfPeople % 50;
    let microbusRemaining = busRemaining % 11;
    let publicBusCost = microbusRemaining * 250;
    return publicBusCost;
  } else {
    return "input a valid number of people";
  }
}
console.log(publicBusFare("input a number of people"));
// console.log(publicBusFare(365));

//_\\----------problem-4-done---------------//_\\

//\\-****---problem-5---****-//\\

function isBestFriend(friend1, friend2) {
  if (typeof friend1 == "object" && typeof friend2 == "object") {
    if (friend1.name === friend2.friend && friend2.name === friend1.friend) {
      return true;
    } else {
      return false;
    }
  } else {
    return "input two valid objects";
  }
}
let person1 = { name: "abul", friend: "kabul" };
let person2 = { name: "kabul", friend: "sabul" };

console.log(isBestFriend("input two objects"));
// console.log(isBestFriend(person1, person2));

//_\\----------problem-5-done---------------//_\\

// ------------------------------assignment completed---------------------------------\\
