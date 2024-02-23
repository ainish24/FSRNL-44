const btn=document.getElementById("ChangeText");
const op=document.getElementById("Output");
btn.addEventListener('click', function(){
    op.textContent= "Content Changed by me!";
})