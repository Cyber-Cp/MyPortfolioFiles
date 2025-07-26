let arr=[]
for(i=0;i<=4;i++){
    let input=prompt("Enter Elements");
    arr.push(input);
}
console.log(arr)
let stringArr=arr.filter(Element=> typeof Element==='string');
console.log(stringArr)
// let stringArr=arr.filter((element)=>element === 'string')
// console.log("These are Strings ",stringArr);
// let numArr=arr.filter((element)=>element != 'string')
// console.log("Numbers",)

    
