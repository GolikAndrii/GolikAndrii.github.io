const btn = document.getElementById("magic-btn");
const clonedBtn = btn.cloneNode(true);
clonedBtn.id = "magic-btn-2";

btn.addEventListener('click', () => {
    clonedBtn.innerText = "Я изменю тебя"
    clonedBtn.style.color="#ffffff"
    clonedBtn.style.backgroundColor="#a78b71"
    clonedBtn.style.fontSize="20px"
    clonedBtn.style.margin="20px"
    clonedBtn.style.borderRadius="10px"
    clonedBtn.style.border="none"
    clonedBtn.style.padding="15px"

    document.body.appendChild(clonedBtn)
})
clonedBtn.addEventListener('click',()=>{
    btn.style.color="#000000"
    btn.style.backgroundColor="#9c4a1a"
})
