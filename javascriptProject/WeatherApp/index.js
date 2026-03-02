const apiKey ="b8f3cd45fe363c42af448d81a054799c";
const weatherApi = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const inputBox = document.querySelector("#inputBox");
const searchBox =  document.querySelector("#searchBox");
const weatherIcon = document.querySelector("#cloudImg");
const mainCon = document.querySelector("#main");
console.log(mainCon);

const footCon = document.querySelector("#footer");
console.log(footCon);

searchBox.addEventListener('click',()=>{
    const city = inputBox.value;
    console.log(city);
    checkWeather(city);
    mainCon.classList.add("mainadd");
    footCon.classList.add("footeradd");

   
});

async function checkWeather(city){
    const response = await fetch(weatherApi+city+`&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);
    document.querySelector("#temp").innerHTML = Math.floor(data.main.temp) + "&degC";
    document.querySelector("#cityName").innerHTML = data.name;
    document.querySelector("#humPercentage").innerHTML = data.main.humidity + " %";
    document.querySelector("#winSpeed").innerHTML = Math.floor(data.wind.speed) + " km/h";

    changeClouds(data);
    
}

function changeClouds(data){
    if(data.weather[0].main=='Clear'){
        weatherIcon.src = "images/clear.png"
    } else if(data.weather[0].main=="Clouds"){
        weatherIcon.src ="images/clouds.png"
    } else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src = "images/mist.png"
    }
     else if(data.weather[0].main=="Rain"){
        weatherIcon.src = "images/rain.png"
    }
     else if(data.weather[0].main=="Snow"){
        weatherIcon.src = "images/snow.png"
    }else{
        weatherIcon.src =""
        weatherIcon.alt ="weather says "+ data.weather[0].main
        weatherIcon.classList.add("others");
    }
    
}



