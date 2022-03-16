// a single slash means root directory /
// a dot slash means current directory ./
// a dot dot slash means a directory above ../

import Header from "../components/Header";
import Footer from "../components/Footer";


const navbar = document.getElementById('navbar');
const footer = document.getElementById('footer');
const weatherDataDiv = document.getElementById("weatherData");

const WEATHER_URL = "https://localhost:44329/weatherforecast";
const TODO_URL = "https://localhost:44329/todos";


export default() => {
    console.log("app is running");
    Setup();

    let todoItem = {
        Id: 0,
        Title: "Test Todo Item 1",
        Description: "Optional",
        Owner: "Carlos Lopez"
    };

    fetch(TODO_URL, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(todoItem)
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err));
    
}

function Setup(){
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