const fs =require('fs');
const studentList = [
  "aa",
  "bb",
  "cc",
  "dd"
];

/* const example = {
  order: 0,
  name: "강지민"
}

// ? 객체 리턴 방식
function makeObject (order, name) {
  return{
    order: order,
    name: name

  }
}

// ? 생성자 함수 방식
function makeConstructor(order,name) {
  if(typeof (order) === "number"){
  this.order = order,
  this.name = name

  function order(order) {
    if(typeof(order)=== "number") {
      return this._order;
    }
  }

  }else{
      console.error("숫자형이 아님");
    }
} */

class User {
  constructor(order,name) {
    this.order = order;
    this.name = name;
  }
  set order(order) {
    if(typeof(order)==="number") {
      this._order = order;
    }
  }
}

let test = [];
studentList.forEach((student, index) => {
  if(student === "dd")
  test.push(new User(index, student));
});

console.log(test);
// fs.writeFileSync("test.Json", JSON.stringify(test, null, 2), "utf8");