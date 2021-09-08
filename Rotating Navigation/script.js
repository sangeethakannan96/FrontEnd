
const openbtn= document.getElementById("open");
const closebtn= document.getElementById("close");

const container=document.querySelector(".container")

console.log(openbtn);
console.log(closebtn);
console.log(container);

openbtn.addEventListener("click", ()=>{

    container.classList.add("show-nav");
});

closebtn.addEventListener("click", ()=>{
    container.classList.remove("show-nav");
});