
const apiKey="8a3ac324a0013cd58a7b91604a594cba";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");


async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
    var data=await response.json();
    var t=data.weather[0].main;
    if (t=='Clouds'){
          t="Cloudy";
          
    }
    if (t=='Clear'){
        t="Clear";
  }
  if (t=='Rain'){
    t="Rainy";
}
if (t=='Drizzle'){
    t="Light Rain";
}
if (t=='Mist'){
    t="Mist";
}
t=t.fontsize(4);

    const name=data.name;

document.querySelector(".city").innerHTML=`${name}`+
`<br>`+`${t}`;

document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";


if (data.weather[0].main=="Clouds"){
    
    weatherIcon.src="https://i.pinimg.com/originals/75/16/ea/7516ea5454d6ebb256d2ecb34b66a95c.gif";

}
else if(data.weather[0].main=="Clear"){
    weatherIcon.src="image/clear.png";

}
else if (data.weather[0].main=="Rain"){
    weatherIcon.src="image/Rain.png";

}
else if (data.weather[0].main=="Drizzle"){
    weatherIcon.src="image/Drizzle.png";

}
else if(data.weather[0].main=="Mist"){
    weatherIcon.src="image/Mist.png";

}
else if(data.weather[0].main=="Haze"){
    weatherIcon.src="image/clouds.png";
}
document.querySelector(".weather").style.display="block";
document.querySelector(".error").style.display="none";

}
}

searchBtn.addEventListener("click",()=>{

    checkWeather(searchBox.value);

})




