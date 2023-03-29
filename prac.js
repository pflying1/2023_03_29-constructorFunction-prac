const studentList = [
  "dd",
  "aa",
  "cc"
];

for(let i=0; i<studentList.length; i++) {
  if(studentList[i]=== "dd") {
    console.log(i)
  }else {
    console.log("찾는 사람이 아님")
  }
}

function searching(array, name){
  for(let i=0; i<array.length; i++) {
    if(array[i]=== name) {
      console.log(i)
    }else {
      console.log(`찾는 ${name}이 아님`)
    }
  } 
}
searching(studentList, "정성철");