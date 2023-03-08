
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


// Second problem 
// +++++++++++++++++++++++++++
function  evenOdd(string) {
    if(typeof string === "string"){
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
