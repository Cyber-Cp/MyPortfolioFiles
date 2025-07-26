// const urlj=document.getElementById('urlh')
// const titlej=document.getElementById('titleh')
// const resj=document.getElementById('resh')
// function add(){
//     const divj=document.createElement('div')
//     const imgj=document.createElement('img')
//     imgj.src=urlj.value
//     const h3j=document.createElement('h3')
//     h3j.textContent=titlej.value
//     divj.append(imgj,h3j)
//     resj.appendChild(divj)
// }

let urlj=document.getElementById('url');
let titlej=document.getElementById('title');
let btn=document.getElementById('btn');
let resultj=document.getElementById('result')
btn.addEventListener('click',function(){
    let div=document.createElement('div');
    let imgj=document.createElement('img');
    imgj.src=urlj.value;
    let h2j=document.createElement('h2');
    h2j.textContent=titlej.value;
    div.append(imgj,h2j);
    resultj.appendChild(div);

 });
//const urlj=document.getElementById('url')