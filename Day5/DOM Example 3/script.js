const addbtn=document.getElementById("addel");
const delbtn=document.getElementById("delel");
const op=document.getElementById("Output");

addbtn.addEventListener('click', function(){
    newItem=document.createElement('li');
    newItem.textContent="New Item added";
    op.appendChild(newItem);
})

delbtn.addEventListener('click', function(){
    const lastItem =op.lastElementChild;
    if(lastItem){
        op.removeChild(lastItem);
    }
    else{
        alert("No element present!")
    }
})