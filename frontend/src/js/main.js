// a single slash means root directory /
// a dot slash means current directory ./
// a dot dot slash means a directory above ../

import Header from "../components/Header";
import Footer from "../components/Footer";


const navbar = document.getElementById('navbar');
const footer = document.getElementById('footer');
const weatherDataDiv = document.getElementById("weatherData");

const WEATHER_URL = "https://localhost:44329/weatherforecast";


export default() => {
    console.log("app is running");

    navbar.innerHTML = Header.SetupNavBar()
    footer.innerHTML = Footer.SetupFooter();
    Header.SetupEventListeners();
}

function GetWeather(){
    fetch(WEATHER_URL)
    .then(response => response.json())
    .then(data => {
        console.log(data.length);
        for(let i = 0; i < data.length; i++){
            let section = document.createElement("section");
            let h2 = document.createElement("h2");
            h2.textContent = data[i].summary;
            section.appendChild(h2);
            weatherDataDiv.appendChild(section);
        }
    })
    .catch(err => console.log(err));
}