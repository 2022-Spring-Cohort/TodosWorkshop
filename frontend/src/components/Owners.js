import * as CONSTANTS from "../components/constants";
import Owner from "../components/Owner";
import apiActions from "../api/api-actions";

export default {
    GetOwners,
    Process
}

function GetOwners(){

    // api request to get owners
    apiActions.getRequest(CONSTANTS.OwnerAPIURL, data => {
        CONSTANTS.Content.innerHTML = Process(data);
        AddEventListeners();
    });
}

function Process(owners){
    return `
        <button id="CreateOwner">Create Owner</button>
        <ol>
            ${owners.map(owner => {
                return `
                    <li id="${owner.id}" class="ownerListItem"><h4>${owner.name}<h4></li>
                `
            }).join('')}
        </ol>
    `
}

function AddEventListeners(){
    let ownerList = document.getElementsByClassName('ownerListItem');
    let CreateButton = document.getElementById('CreateOwner');

    Array.from(ownerList).forEach(element => {
        let id = element.id;
        let OwnerName = element.getElementsByTagName("h4")[0];


        OwnerName.addEventListener('click', function(){
            
            Owner.GetOwner(id);

        });

    });

    CreateButton.addEventListener("click", function(){
        Owner.AddOwner();
    });

}