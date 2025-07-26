
let Attemtsleft=3;

let isLoggedin = false;

let correctpassward="secret123";
while(Attemtsleft>0 && !isLoggedin)
{
    enteredpassward=prompt(`Enter passward:Attepts left:  ${Attemtsleft}`);
    if(enteredpassward===correctpassward)
    {
        
        isLoggedin=true;
        console.log(`Attepts left:  ${Attemtsleft} login successfull`)

    }else{
        Attemtsleft--;
      
        console.log("Incorrect passward");
}
    
    }
    

    if(!isLoggedin){
        console.log("no attempts left");
        
    }else{
        console.log("Logged in successfully");
        
    }