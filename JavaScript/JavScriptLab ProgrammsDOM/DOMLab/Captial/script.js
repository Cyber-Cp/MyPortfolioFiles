let txt=document.getElementById('ta')
txt.addEventListener('input',(e)=>{
    let val=txt.value.toUpperCase();
    console.log(e.target);
    txt.value=val;
})
// 