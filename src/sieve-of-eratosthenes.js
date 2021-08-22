export default class Eratosthenes {

  constructor(maxNumber) {
    this._maxNumber =  maxNumber;
    this._ArrayMaxNumbers = this._getAllMaxNumbers(this._maxNumber)
  }

  getPrimes() {

  }

  _getAllMaxNumbers(maxNumber) {
    let answer = new Array;
    for (let i = 2; i < maxNumber; i++) {
      answer.push(i);
    }
    console.log(this._ArrayMaxNumbers);
    return answer;
  }
 

}