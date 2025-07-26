let name=document.getElementById('em');
let pwd=document.getElementById('pwd');
let check=document.getElementById('cb');
let btn=document.getElementById('Submit');
btn.addEventListener('mouseover',function() {
    btn.style.position="absolute";
    btn.style.top=Math.round(Math.random()*100)+"%";
    btn.style.left=Math.round(Math.random()*100)+"%"
});
btn.addEventListener('mouseover',randomMove)
check.addEventListener('click',function(){
    btn.style.position="static";
    btn.removeEventListener("mouseover",randomMove)
})
let form=document.getElementById('form').addEventListener('submit',function(e){
    e.preventDefault()
})