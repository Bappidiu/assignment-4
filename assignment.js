//\\ ---problem-1--- //\\

function radianToDegree(radian) {
  let pi = Math.PI;
  const degree = radian * (180 / pi);
  return degree.toFixed(2);
}
console.log(radianToDegree(199));

//\\ ---problem-2---//\\

function isJavaScriptFile(fileName) {
  if (fileName.endsWith("js")) {
    return true;
  } else {
    return false;
  }
}
console.log(isJavaScriptFile("index.js"));

//\\---problem-3---//\\

function oilPrice(disel, petrol, octen) {
  let diselPrice = disel * 114;
  let petrolPrice = petrol * 130;
  let octenPrice = octen * 135;
  let totalCost = diselPrice + petrolPrice + octenPrice;
  return totalCost;
}
console.log(oilPrice(0, 2, 3));

//\\---problem-4---//\\

function publicBusFare(numberOfPeople) {
  let busRemaining = numberOfPeople % 50;
  let microbusRemaining = busRemaining % 11;
  let publicBusCost = microbusRemaining * 250;
  return publicBusCost;
}
console.log(publicBusFare(365));

//\\---problem-5---//\\

function isBestFriend(friend1, friend2) {
  if (friend1.name === friend2.friend && friend2.name === friend1.friend) {
    return true;
  } else {
    return false;
  }
}
console.log(
  isBestFriend(
    { name: "abul", friend: "kabul" },
    { name: "kabul", friend: "sabul" }
  )
);
