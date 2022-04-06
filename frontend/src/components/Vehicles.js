import * as CONSTANTS from "../components/constants";
import login from "../api/login-actions";
import apiActions from "../api/api-actions";

export default {
    DisplayAll
}


function DisplayAll(){

    console.log(CONSTANTS.VehicleAPIURL.replace("{0}", login.GetUserId()));


    apiActions.getRequest(CONSTANTS.VehicleAPIURL.replace("{0}", login.GetUserId()), data => {
     console.log(data);

        let vehicleDiv = "<div>{0}</div>";
        let vehicles = "";

        for(let i = 0; i < data.length; i++){
            // let carSection = document.createElement("section");
            // let vehicle = document.createElement("p");
            vehicles += "<p>" + data[i].make + " " + data[i].model + " (" + data[i].year + ")</p>";
            vehicles += "<sup>" + data[i].owner.name + "</sup>";
            // carSection.append(vehicle);
            // vehicleDiv.appendChild(carSection);
        }

        vehicleDiv = vehicleDiv.replace("{0}", vehicles);

        CONSTANTS.Content.innerHTML = vehicleDiv;
    });

    // fetch(CONSTANTS.VehicleAPIURL.replace("{0}", login.GetUserId()))
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);

    //     let vehicleDiv = "<div>{0}</div>";
    //     let vehicles = "";

    //     for(let i = 0; i < data.length; i++){
    //         // let carSection = document.createElement("section");
    //         // let vehicle = document.createElement("p");
    //         vehicles += "<p>" + data[i].make + " " + data[i].model + " (" + data[i].year + ")</p>";
    //         vehicles += "<sup>" + data[i].owner.name + "</sup>";
    //         // carSection.append(vehicle);
    //         // vehicleDiv.appendChild(carSection);
    //     }

    //     vehicleDiv = vehicleDiv.replace("{0}", vehicles);

    //     CONSTANTS.Content.innerHTML = vehicleDiv;

    // })
    // .catch(err => console.log(err));


}

