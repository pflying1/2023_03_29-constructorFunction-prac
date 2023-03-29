const fs = require('fs');
const coffeeName= [
  "카누",
  "맥심",
  "맥스웰",
  "테이스트 초이스",
  "스타벅스",
  "일리"
]
const coffeePrice =[
  "1000",
  "2000",
  "3000",
  "2000",
  "3000",
  "2000"
]


class coffeeMaker {
  constructor(order,coffee,price) {
    this.order = order;
    this.coffee = coffee;
    this.price = price;
  }
  set order(order) {
    if(typeof(order)==="number"){
      this._order = order;
    }
  }
}
class coffeeMaker2 {
  constructor(price) {
    this.price = price;
  }
}




let coffeeChoice = [];
coffeeName.forEach((coffee,index) => {
    coffeeChoice.push(new coffeeMaker(index,coffee));
  })
coffeePrice.forEach((price) => {
    coffeeChoice.push(new coffeeMaker2(price));
  })
console.log(coffeeChoice);
fs.writeFileSync("coffeeMenu.Json", JSON.stringify(coffeeChoice, null, 2), "utf8");