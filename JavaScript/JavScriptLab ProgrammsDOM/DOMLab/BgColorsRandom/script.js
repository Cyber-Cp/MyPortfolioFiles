// const body=document.getElementById('Body');
// const btnj=document.getElementById('btn');
// let colorString = "ABCDEabcdef123456789"
// btnj.addEventListener('click',function(){
//      let colors='#';
//      for(let i = 0; i < 6; i++){
//         colors+= colorString[Math.floor(Math.random()*256)]
//      }
// document.body.style.backgroundColor = colors });
const btnj=document.getElementById("btn")

btnj.addEventListener('click',function(){
     const randomColor=getrandomColor();

    document.body.style.backgroundColor=randomColor();
    //document.body.style.backgroundColor="";   
});
function getrandomColor(){
     Math.floor(Math.random()*16777215).toString(16);
    return "#"+("000000"+randomColor).slice(-6);
};
 


<script>
    // When the page loads, run this code
    // 1. Get the button element
    const button = document.getElementById('changeColorBtn');

    // 2. Add an event listener for clicks
    button.addEventListener('click', function() {
        // 3. Generate a random color
        const randomColor = getRandomColor();

        // 4. Change the background color of the body
        document.body.style.backgroundColor = randomColor;
    });

    // Function to generate a random color
    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
</script>