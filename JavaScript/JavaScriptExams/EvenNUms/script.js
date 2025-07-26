let num=[1, 2, 3, 4, 5, 6]
let i=1;
let count=0;
function evenNum(){
    while(i<=num.length){
        if(i%2==0){
            count++;
        }
        i++;
    }
  console.log(count)
}
evenNum()
