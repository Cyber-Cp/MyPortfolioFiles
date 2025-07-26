const para=document.getElementById('para')
addEventListener('keydown', function(e){
    const para=document.getElementById('para')
if(e.target){
    para.textContent=e.key;
}
})
addEventListener('keydown',(e)=>{
   document.getElementById('para').textContent=e.key;
})