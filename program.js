// first problem - 1.
// Description:  This is function name use mindGame and receive perimeter and check number then total calculations and  outport for user
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
const gameNumber = mindGame(33);

// Second problem - 2.
// description:  this function work input a String character then check length ar result give this even or add
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
const names = evenOdd("chatgpt");

// Third problem -3
// description: this is function work same one input then check 7 grater then 0 or Qual then input Subtraction - 7 other then multiply input parameter return
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
// description: this function work same array check positive number and negative number finlay all bad data total return ;
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

const numberArray = [-4, -9, -5, -33, -55];
const totalBadData = findingBadData(numberArray);

// Five problem - 5
//  description: this is function 3types parameter and check number  then first, second, third total 3 friends output total diamond.  Grater then 2000  Subtraction Other wish total result Subtraction 2000;
function gemsToDiamond(number1, number2, number3) {
  if (
    typeof number1 === "number" &&
    typeof number2 === "number" &&
    typeof number3 === "number"
  ) {
    const firstFriendGems = number1 * 21;
    const secondFriendGems = number2 * 32;
    const thirdFriendGems = number3 * 43;
    let total = firstFriendGems + secondFriendGems + thirdFriendGems;
    if (total > 2000) {
      total -= 2000;
      return total;
    } else {
      return total;
    }
  } else {
    return "please provide valid number";
  }
}

const gemsPoint = gemsToDiamond(100, 5, 1);
