const btn = document.getElementById("magic-btn");
const clonedBtn = btn.cloneNode(true);
clonedBtn.id = "magic-btn-2";

btn.addEventListener('click', () => {
    clonedBtn.innerText = "Я изменю тебя"
    clonedBtn.style.color="#ffffff"
    clonedBtn.style.backgroundColor="#a78b71"
    document.body.appendChild(clonedBtn)
})
clonedBtn.addEventListener('click',()=>{
    btn.style.color="#000000"
    btn.style.backgroundColor="#9c4a1a"
})
