 // api
 const apiKey = "47d373af570556ae0ca111720ae308bc";
 const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

 const searchBox = document.querySelector(".search input");
 const searchBtn = document.querySelector(".search button");
 const weatherIcon = document.querySelector(".weather img");

 async function checkweather(city){
     const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
     
     if(response.status == 404){
         document.querySelector(".error").style.display = "block";
         document.querySelector(".weather").style.display = "none";
     }else{

     var data = await response.json();

     document.querySelector(".city").innerHTML = data.name;
     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
     document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
     
     // weathers
     if (data.weather[0].main == "Clouds") {
         weatherIcon.src = "https://i.ibb.co/QYgDDhC/cloud.png";
         weatherIcon.alt = "cloud-icon";
       } else if (data.weather[0].main == "Clear") {
         weatherIcon.src = "https://i.ibb.co/XYkPsrj/sun.png";
         weatherIcon.alt = "sun-icon";
       } else if (data.weather[0].main == "Rain") {
         weatherIcon.src = "https://i.ibb.co/nfbNbYj/rain-edit.png";
         weatherIcon.alt = "rain-icon";
       } else if (data.weather[0].main == "Drizzle") {
         weatherIcon.src = "https://i.ibb.co/rcN05Rr/drizzle.png";
         weatherIcon.alt = "drizzle-icon";
       } else if (data.weather[0].main == "Mist") {
         weatherIcon.src = "https://i.ibb.co/WFfBDwB/mist.png";
         weatherIcon.alt = "mist-icon";
       }

     document.querySelector(".weather").style.display = "block";
     document.querySelector(".error").style.display = "none";

         }
     }
     // events on click or enter
     searchBtn.addEventListener("click", () => {
         checkweather(searchBox.value);
     });
     
     searchBox.addEventListener("keydown", (event) => {
         if (event.key === "Enter") {
             checkweather(searchBox.value);
         }
     }); 