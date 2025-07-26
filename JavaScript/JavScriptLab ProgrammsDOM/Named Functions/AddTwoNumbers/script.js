let a=+prompt("Enter Number");
    let b=+prompt("Ener another Numebr");
function addTwo(){
    console.log("Sum of Two Numbers is :",a+b)
}
addTwo();
function addTwoDirect(a,b){
    console.log("Addition of two Numbers : ",a+b);

}
//addTwoDirect(20,211);
function addTwoWithReturn(a,b){
    return "Sum of two Numeberes :"+(a+b);
}
console.log(addTwoWithReturn(500,500));
