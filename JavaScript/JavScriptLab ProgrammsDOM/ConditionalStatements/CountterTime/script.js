// let a=+prompt("Enter A Cunter Value");
// //let i=0;
// let count=0;
// while(a>=0){
//     console.log(a);
//     a--;
// }



for(let i=1;i<=5;i++){
    //console.log(i);
    let str='';
    for(j=1;j<=5;j++){
        str=i;
        console.log(`${str}`);
    }
    
}
let arr=[1,2,3,4,5];
let sum=0;
arr.forEach(function(ele,ind){
    if(ele%2==0){
        sum=sum+ele;
    }

arr=[5,4,3,2,1];
let x=arr.forEach(function(ele,ind){
    return ele*ele;
})
console.log("X Value is ",x);

arr=[5,4,3,21,12];
x=arr.map(function(ele,ind){
    return ele*ele;
})
console.log("return x is",x);





///error in ...
})
console.log("summ of Even ",sum);

arr=["raj","CP","Arshan","Opps"];
arr.forEach(function(ele,ind){
    console.log(ele.chartAt(0).toUpperCase())
})