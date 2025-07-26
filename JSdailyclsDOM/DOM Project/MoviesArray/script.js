//Colect the elements......
const inputUrl=document.getElementById('url');
const inputTitle=document.getElementById('title');
const inputButton=document.getElementById('btn');
const inputResult=document.getElementById('result');


//Create one Array Externally..
const cardsArray=[];

inputButton.addEventListener('click',()=>{
    //Get Values from inputs
    const imgUrl=inputUrl.value;
    const imgTitle=inputTitle;

    //validate Inputs 
     if(!imgUrl||!imgTitle){
        alert('Please fill both fields');
         return;
     }
     //Create and Appened card
     const card=document.createElement('div');
     card.className='card';


     const img=document.createElement('img');
     img.src=inputUrl.value;

     const titleh2=document.createElement('h2');
     titleh2.textContent=imgTitle;

     card.append(img,titleh2);
     inputResult.append(card);
     //Store in Array
     const CardData={
        url:inputUrl,
        title:inputTitle,
        HTMLElement:card
     };
     cardsArray.push(CardData);
     console.log("Array",cardsArray);

     //Clear Inputs
     inputUrl.value="";
      inputTitle.value="";

})

// // create card on Button Click (Without array yet)
// inputButton.addEventListener('click',()=>{
//     //Get values from inputs
//     const imgUrl=inputUrl.value;
//     const imgtitle=inputTitle.value;

//     //Validate Inputs
//     if(!imgUrl||!imgtitle){
//         alert('Please fill both fields');
//         return;
//     }


//     //Create card elements
//     const cardDiv=document.createElement('div');
//     cardDiv.className='card';

//     const imgElement=document.createElement('img');
//     imgElement.src=imgUrl;

//     const titleElement=document.createElement('h2');
//     titleElement.textContent=imgtitle;

//     //Build card Structure
//     cardDiv.append(imgElement,titleElement);
//     //Add card to results conatiner
//     inputResult.appendChild(cardDiv);

//     //Clear inputs
//     inputTitle.value="";
//     inputUrl.value="";
// });
























































// const urlj=document.getElementById('url');
// const titlej=document.getElementById('title');
// const btnj=document.getElementById('btn');
// const resultj=document.getElementById('result');
// // Add btn function

// let movieArr = []

// btnj.addEventListener('click',function(){
    
//     const movie={
//         url:urlj.value,
//         titl:titlej.value
//     };
//     movieArr.push(movie)
//     displayMovies();
// });

// function displayMovies(){
//     movieArr.forEach((m)=>{
//         const div=document.createElement('div');
//     const image=document.createElement('img');
//     image.src=m.url;
//     const h2j=document.createElement('h2');
//     h2j.textContent=m.titl;
//     div.append(image,h2j);
//     resultj.appendChild(div);

//     })
// }

