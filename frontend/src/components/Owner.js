import * as CONSTANTS from "../components/constants";
import Owners from "../components/Owners";
import apiActions from "../api/api-actions";


export default {
    GetOwner,
    Process,
    AddOwner
}

function AddOwner(){
    CONSTANTS.Content.innerHTML = `
        <section>
            <label for="Name">Owner Name</label>
            <input type="text" name="Name" id="Name" />

            <label for="Image">Profile Image</label>
            <input type="file" name="Image" id="Image" />

            <hr />
            <button id="CreateOwner">Create Owner</button>
        </section>
    `;

    let SaveButton = document.getElementById('CreateOwner');

    SaveButton.addEventListener("click", function(){
        const currentFile = document.getElementById("Image").files[0];
        let name = document.getElementById("Name").value;
        let owner = {
            Name: name
        }

        let requestBody = {
            owner: owner,
            image: currentFile
        }

        fetch(CONSTANTS.OwnerAPIURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        })
        .then(response => response.json())
        .then(data => {

        })
        .catch(err => console.log(err));

        // apiActions.postRequest(CONSTANTS.TodoAPIURL, todoItem, data => {
        //     CONSTANTS.Content.innerHTML = Todos.Process(data);
        //     Todos.AddEventListeners();
        // });
      
   });

}

function GetOwner(id){
    apiActions.getRequest(CONSTANTS.OwnerAPIURL + id, data => {
        CONSTANTS.Content.innerHTML = Process(data);
    });
}

function Process(owner){
    return `
        <h2>${owner.name}</h2>
        <hr />
        <ul>
            ${owner.todos.map(todo => {
                return `
                    <li id="${todo.id}">${todo.title}</li>
                `
            }).join('')}
        </ul>
    `
}