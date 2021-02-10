const owner = document.getElementById("owner");
const caption = document.getElementById("caption");
const url = document.getElementById("url");
const button = document.querySelector(".btn");
const form = document.getElementById("myForm");
// console.log(owner+" "+caption+" "+url);

form.addEventListener("submit",(e)=>{
    e.preventDefault();
});

button.addEventListener("click", ()=>{
    console.log(owner.value+" "+caption+" "+url);
    // alert("this page says hi"); 
})
