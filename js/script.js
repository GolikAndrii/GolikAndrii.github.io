let cityRef = document.getElementById("city")


let result = document.getElementById("result")
let searchBtn = document.getElementById("search-btn")

let getWeather = ()=>{
    fetch ('http://ip-api.com/json/?fields=61439')
        .then((res)=>res.json())
        .then((res)=>{
            cityRef.value = res.city;
            console.log(res.city)
        })
        .catch((err)=>console.log(err)   )
    let cityValue = cityRef.value;
    console.log(cityValue)
    if(cityValue.length ==0){
        result.innerHTML = `<h3 class="msg">Please, enter a city name</h3>`
    } else {

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
        // cityRef.value=""

        fetch(url)
            .then((resp) => resp.json())
            .then(data => {
                 console.log(data)


                result.innerHTML = `
                    <h2>${data.name}</h2>                    
                    <div class="temperature-img">
                        <div>
                            <h4 class="weather">${data.weather[0].main}</h4>
                            <h4 class="desc">${data.weather[0].description}</h4>
                        </div>    
                        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
                    </div>
                    <h1>${Math.round(data.main.temp)} &#176;</h1>
                    <div class="temp-container">
                        <div>
                            <h4 class="temp"><span class="wind">wind speed:</span> ${data.wind.speed} km/h</h4>
                            <h4 class="temp"><span class="humidity">humidity:</span> ${data.main.humidity} %</h4>
                        </div>
                        <div>
                            <h4 class="title">min</h4>
                            <h4 class="temp">${Math.round(data.main.temp_min)} &#176;</h4>
                        </div>
                        <div>
                            <h4 class="title">max</h4>
                            <h4 class="temp">${Math.round(data.main.temp_max)} &#176;</h4>
                        </div>

                    </div>
                `
            })
            .catch(() =>{
                result.innerHTML = `<h3 class="msg">City not found</h3>`
            })
        }
    }
   searchBtn.addEventListener("click", getWeather)
window.addEventListener("load", getWeather)
