let mixArr=[1231,"q231",12311,"242142",4211]
let string=mixArr.filter((element)=>typeof element === 'string')
console.log(string)
let num=mixArr.filter((element)=>typeof element != 'string')
console.log(num)
let numArr=[21,22,32,25,12,31,10,2,4]
let even=numArr.filter((element)=> element%2==0)
console.log(even)
let odd=numArr.filter((element)=>element%2!=0)
console.log(odd)
