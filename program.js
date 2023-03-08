
// first problem - 1
// +++++++++++++++++++++++++++
 function mindGame(number) {
    if(typeof number === "number"&& number >= 0){
      let total = number * 3;
      total  +=  10; 
      total /= 2
      total -= 5;
      return total;
    }else{
        return 'please provide positive number';
    }
 }
const gameNumber =  mindGame(50)


// Second problem - 2
// +++++++++++++++++++++++++++
function  evenOdd(string) {
    if(typeof string === "string" && string.length >= 0){
        if(string.trim().length % 2  === 0){
          return "even number";
        }else{
            return "odd number";
        }
    }else{
        return "Please provide String character  ?"
    }
}
const names =  evenOdd("-2");


// Third problem -3
// +++++++++++++++++++++++++++
function isLGSeven (number) {
    if(number < 7){
      return number - 7
    }else{
        return number * number;
    }
}

const isNumber =  isLGSeven(15)