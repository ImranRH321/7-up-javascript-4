
// first problem 
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

