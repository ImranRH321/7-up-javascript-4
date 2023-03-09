// first problem - 1
// +++++++++++++++++++++++++++
function mindGame(number) {
  if (typeof number === "number" && number >= 0) {
    let total = number * 3;
    total += 10;
    total /= 2;
    total -= 5;
    return total;
  } else {
    return "please provide positive number";
  }
}
const gameNumber = mindGame(50);

// Second problem - 2
// +++++++++++++++++++++++++++
function evenOdd(string) {
  if (typeof string === "string" && string.length >= 0) {
    if (string.trim().length % 2 === 0) {
      return "even number";
    } else {
      return "odd number";
    }
  } else {
    return "Please provide String character  ?";
  }
}
const names = evenOdd("-2");

// Third problem -3
// +++++++++++++++++++++++++++
function isLGSeven(number) {
  if (typeof number === "number") {
    if (number <= 7) {
      return number - 7;
    } else {
      return number * number;
    }
  } else {
    return "please provide  number";
  }
}

const isNumber = isLGSeven(6);

// Four problem - 4
// +++++++++++++++++++++++++++
function findingBadData(array) {
  if (Array.isArray(array)) {
    let badData = [];
    for (const number of array) {
      if (number < 0) {
        badData.push(number);
      }
    }
    return badData.length;
  } else {
    return "please provide Array";
  }
}
const numberArray = [10, 12, "-4", "-3", -9, -5, -33, -55];
const totalBadData = findingBadData(numberArray);

// Five problem - 5
// +++++++++++++++++++++++++++
function gemsToDiamond(number1, number2, number3) {
  if(typeof number1 === "number" && typeof number2 === "number" && typeof number3 === "number"){
    const firstFriendGems = number1 * 21;
    const secondFriendGems = number2 * 32;
    const thirdFriendGems = number3 * 43;
    let total = firstFriendGems + secondFriendGems + thirdFriendGems;
    //   console.log(total);
    if (total > 2000) {
      total -= 2000;
      return total;
    } else {
      return total;
    }
  }else{
    return "please provide valid number";
  }
   
}

const gemsPoint = gemsToDiamond(20, 200, 50);
