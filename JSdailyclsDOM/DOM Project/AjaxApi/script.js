const inputResult=document.getElementById('result');
function getData(){
    fetch(`https://sv443.net/jokeapi/v2/joke/Programming`)
    .then((res)=>res.json())
    .then((data)=>displayData(data))
    .then((err)=>console.log(err))
}
setInterval(()=>getData(),1000)
function displayData(data){
    //inputResult="";
    const query=document.createElement('h4')
    query.textContent=data.category;
    const joke=document.createElement('p');
    joke.textContent=data.joke;
    inputResult.append(query,joke);

}