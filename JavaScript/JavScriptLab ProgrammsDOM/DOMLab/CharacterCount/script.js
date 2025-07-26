let count=0;
let dis=document.getElementById('dis')
let txt=document.getElementById('ta')
txt.addEventListener('input',(e)=>{
    count++;
     dis.innerText=count;
})