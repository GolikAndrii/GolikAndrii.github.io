// ЗАДАНИЕ 2
// Выберите одну API из списка. Сделайте fetch запрос, 
// разместите полученную от API информацию на странице html.
async function loadNational(){
    const response = await fetch("https://api.ipify.org?format=json");
    const obj = await response.json();
     console.log(obj);
    const {ip} = obj;

    const textIp = document.getElementById("ipNumber");
    textIp.innerText = ip;
}
loadNational();
