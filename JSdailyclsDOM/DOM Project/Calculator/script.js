const fvj=document.getElementById('fvh');
const svj=document.getElementById('svh');
const resj=document.getElementById('resh')

function add(){
    resj.textContent=`The sum is thiss ${+fvj.value + +svj.value}`
}
function sub(){
    resj.textContent=`The Sub of Values is ${fvj.value-svj.value}`
}
function reset(){
    resj.textContent='Successfully Reseted ....'
    fvj.value=''
    svj.value=''
}
function modDiv(){
    resj.textContent=`The Modules Division of Values ${fvj.value/svj.value}`
}
function div(){
    resj.textContent=`The Divsion of Values ${fvj.value%svj.value}`;
}