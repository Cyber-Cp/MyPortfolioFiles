alert("Welcome To CP Divine Deals");
let user=prompt("Who are You ");
//let amt=+prompt("Enter Total Amount: ");
if(user=="Member"){
    let amt=+prompt("Enter Total Amount: ");
    if(amt>200){
        let disc=amt*(0.15);
        console.log("Your total amount for 15%disc  "+(amt-disc));
    }
    else if(amt>100){
        let disc=amt*(0.1);
        console.log("Your Total amont is with 10%disc "+(amt-disc));
    }
    else console.log("No Discount go to home "+amt);
}else {
    let amt=+prompt("Enter Total Amount: ");
    if(amt>500){
        let disc=amt*(5/100);
        console.log("Your Not a Member Take Membershipe Otherwise  total for 5%disc "+(amt-disc));
    }
    else {
        console.log("No Discount Good Bye "+amt);
    }
}
