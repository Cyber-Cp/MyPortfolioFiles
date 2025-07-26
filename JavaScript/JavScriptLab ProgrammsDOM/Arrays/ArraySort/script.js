
let arr=[]
let numbers;
for(i=0;i<=4;i++){
 numbers=+prompt("Enter Numbers")
 arr.push(numbers)
}
let ascdng=arr.sort((a,b)=>(a-b))
for(ascdng of arr){
    console.log(ascdng)
}
console.log("---------------------------------------------------")
let desndng=arr.sort((a,b)=>(b-a))
for(desndng of arr){
    console.log(desndng)
}