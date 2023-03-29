// new는 뭘까?
//생성자 함수에서 만들어진 무언가
//Date 파란색 글씨 내장 객체 
// const a = new Date();
// console.dir(a.getFullYear());

// const b = {
//   year: 2023,
//   month: 3,
//   day: 29
// }

// console.log(b.year + "년도");

//.은 객체 
// function d(a, b, c) {
//     this.year = a;
//     this.month = b;
//     this.day = c;
// }

// const test = d(2023, 3, 29).year;
// console.log(test);

const fs = require('fs');

//객체를 찍어내서 생성자 함수
function user(id, password, email) {
  this.id = id,
  this.password = password,
  this.email = email
}


let names = ["kong", "daljae","jieun"];
let passwords = ["123","123","123"];
let emails = ["kong@gmail.com","dal@gmail.com","ji@gmail.com"];

let members = [];
for(let i=0; i<3; i++) {
  members.push(new user(names[i], passwords[i], emails[i]));
}

fs.writeFileSync("members.Json", JSON.stringify(members, null, 2), "utf8");

console.log(members);