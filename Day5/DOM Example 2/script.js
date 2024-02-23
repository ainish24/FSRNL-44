const btn1=document.getElementById("Click");
const btn2=document.getElementById("Hover");
const op=document.getElementById("Output");

btn1.addEventListener('click', function(){
    op.textContent="Clicked";
    op.style.color="Blue";
})

btn2.addEventListener('mouseover', function(){
    op.textContent="Hovered";
    op.style.color="rgb(204,255,102)";
})