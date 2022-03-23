import * as CONSTANTS from "../components/constants";
import Todos from "../components/Todos";
import apiActions from "../api/api-actions";


export default {
    GetTodo,
    AddTodo
}

function GetTodo(id){

    apiActions.getRequest(CONSTANTS.TodoAPIURL + id, data => {
        CONSTANTS.Content.innerHTML = Process(data);
        AddEventListeners();
    });

    // fetch(CONSTANTS.TodoAPIURL + id)
    // .then(response => response.json())
    // .then(data => {
    //     CONSTANTS.Content.innerHTML = Process(data);
    //     AddEventListeners();
    // })
    // .catch(err => console.log(err));
}

function AddTodo(){
    CONSTANTS.Content.innerHTML = `
        <section>
            <label for="TodoTitle">Todo Title</label>
            <input type="text" name="TodoTitle" id="TodoTitle" />

            <label for="TodoDesc">Todo Description</label>
            <input type="text" name="TodoDesc" id="TodoDesc" />

            <label for="TodoOwnerId">Owner</label>

            <select id="TodoOwnerId" name="TodoOwnerId">
                <option selected disabled>--- SELECT OWNER ---</option>
            </select>

            <hr />
            <button id="CreateTodo">Create Todo</button>
        </section>
    `;

    //call DropDownList Populate
    PopulateOwners();

    let SaveButton = document.getElementById('CreateTodo');

    SaveButton.addEventListener("click", function(){
        let todoItem = {
            Title : document.getElementById("TodoTitle").value,
            Description: document.getElementById("TodoDesc").value,
            OwnerId : document.getElementById("TodoOwnerId").value
        }

        apiActions.postRequest(CONSTANTS.TodoAPIURL, todoItem, data => {
            CONSTANTS.Content.innerHTML = Todos.Process(data);
            Todos.AddEventListeners();
        });
        
        // fetch(CONSTANTS.TodoAPIURL, {
        //         method: "POST",
        //         headers: {
        //             "Content-Type" : "application/json"
        //         },
        //         body: JSON.stringify(todoItem)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     CONSTANTS.Content.innerHTML = Todos.Process(data);
        //     Todos.AddEventListeners();
        // })
        // .catch(err => console.log(err));
   });

}

function EditTodo(data){
    console.log(data);
    CONSTANTS.Content.innerHTML = `
        <h2>Todo Item Details</h2>
        
        <input type="hidden" value="${data.id}" id="EditId" />
        <hr />

        <section>
            <h3><input type="text" id="EditTitle" value="${data.title}" /> - <input type="text" id="EditDueDate" value="${data.dueDate}" /></h3>
            <p>
                <input type="text" id="EditDescription" value="${data.description}" />
            </p>
            <select id="TodoOwnerId" name="TodoOwnerId">
                <option selected disabled>--- SELECT OWNER ---</option>
            </select>
        </section>
        <button id="${data.id}" class="updateButton">Update</button>
   `;

   PopulateOwners(data.owner.id);

   let UpdateButton = document.getElementsByClassName("updateButton")[0];

    UpdateButton.addEventListener("click", function(){
        

        let todoItem = {
            Id: document.getElementById("EditId").value,
            Title : document.getElementById("EditTitle").value,
            Description: document.getElementById("EditDescription").value,
            OwnerId : document.getElementById("TodoOwnerId").value,
            DueDate : document.getElementById("EditDueDate").value
        }

        console.log(todoItem);

        apiActions.putRequest(CONSTANTS.TodoAPIURL, this.id, todoItem, data => {
            CONSTANTS.Content.innerHTML = Process(data);
            AddEventListeners();
        });

        // fetch(CONSTANTS.TodoAPIURL + this.id, {
        //     method: "PUT",
        //     headers: {
        //         "Content-Type" : "application/json"
        //     },
        //     body: JSON.stringify(todoItem)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     CONSTANTS.Content.innerHTML = Process(data);
        //     AddEventListeners();
        // })
        // .catch(err => console.log(err));

    });


}

function Process(data){
   return `
        <h2>Todo Item Details</h2>

        <hr />

        <section>
            <h3>${data.title} - ${data.dueDate}</h3>
            <p>
                ${data.description}
            </p>
            <section>
            <h5>Owner: ${data.owner.name}</h5>
            </section>
        </section>
        <button id="${data.id}" class="editButton">Edit</button>
   `;



}

function AddEventListeners(){
    
    let EditButton = document.getElementsByClassName("editButton")[0];
    

    EditButton.addEventListener("click", function(){
        console.log(this.id);

        apiActions.getRequest(CONSTANTS.TodoAPIURL + this.id, data => {
            EditTodo(data);
            AddEventListeners();
        });

        // fetch(CONSTANTS.TodoAPIURL + this.id)
        // .then(response => response.json())
        // .then(data => {
        //     EditTodo(data);
        //     AddEventListeners();
        // })
        // .catch(err => console.log(err));
    });
}

function PopulateOwners(selectedId = undefined){
    apiActions.getRequest(CONSTANTS.OwnerAPIURL, data => {
        let selectOwners = document.getElementById("TodoOwnerId");

        data.forEach(element => {
            console.log(element.name);
            let option = document.createElement("option");
            option.value = element.id;
            option.text = element.name;
            if(selectedId != undefined){
                option.selected = selectedId;
            }
            selectOwners.appendChild(option);
        });

    });
}