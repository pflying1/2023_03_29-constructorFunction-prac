module.exports = function (array, name){
  for(let i=0; i<array.length; i++) {
    if(array[i]=== name) {
      console.log(i)
    }else {
      console.log(`찾는 ${name}이 아님`)
    }
  } 
}

/* export default function (array, name){
  for(let i=0; i<array.length; i++) {
    if(array[i]=== name) {
      console.log(i)
    }else {
      console.log(`찾는 ${name}이 아님`)
    }
  } 
} */