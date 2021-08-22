export default class Eratosthenes {

  constructor(maxNumber) {
    this._maxNumber =  maxNumber + 3;
    this._ArrayMaxNumbers = this._getAllMaxNumbers(this._maxNumber);
  }

  getPrimes() {
    let maxArray = this._getAllMaxNumbers(this._maxNumber);
    for (let i = 2; i < maxArray.length; i++) {
      for (let a = i + 1; a < maxArray.length; a++) {
        if (a % i == 0) {
          let erase = this._ArrayMaxNumbers.indexOf(a);
          if (erase != -1) {
            this._ArrayMaxNumbers.splice(erase, 1);
          }
        }
      }
    }
    this._ArrayMaxNumbers.splice(this._ArrayMaxNumbers.length - 2, 2);
    return this._ArrayMaxNumbers;
  }

  _getAllMaxNumbers(maxNumber) {
    let answer = new Array;
    for (let i = 2; i < maxNumber; i++) {
      answer.push(i);
    }
    return answer;
  }
 
}