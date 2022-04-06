import * as CONSTANTS from "../components/constants";
import Todo from "../components/Todo";
import apiActions from "../api/api-actions";


export default {
    GetTodos,
    Process,
    AddEventListeners
}

function GetTodos(){

    apiActions.getRequest(CONSTANTS.TodoAPIURL, data => {
        CONSTANTS.Content.innerHTML = Process(data);
        AddEventListeners();
    });

    // apiActions.getRequest(CONSTANTS.TodoAPIURL, data => {
    //     contentDiv.innerHTML = Process(data);
    //     AddEventListeners();
    // });

    // fetch(CONSTANTS.TodoAPIURL)
    // .then(response => response.json())
    // .then(data => {
    //     contentDiv.innerHTML = Process(data);
    //     AddEventListeners();
    // })
    // .catch(err => console.log(err));
}

function Process(todos){
    return `
        <button id="CreateTodo">Create New Todo</button>
        <ol>
            ${todos.map(todo =>{
                return `
                    <li id="${todo.id}" class="todoListItem">
                        <h4>${todo.title}</h4>
                        <ul>
                            <li>Owner: ${todo.owner.name}</li>
                            <li>Description: ${todo.description}</li>
                        </ul>
                        <button class="todoDeleteButton">Delete</button>
                    </li>
                `;
            }).join('')}
        </ol>
    `;
}

function AddEventListeners(){


    let CreateButton = document.getElementById('CreateTodo');
    let todoList = document.getElementsByClassName('todoListItem');

    //let deleteButtons = document.getElementsByClassName("todoDeleteButon");

    Array.from(todoList).forEach(element => {
        
        let id = element.id;
        let DeleteButton = element.getElementsByClassName("todoDeleteButton")[0];
        let TodoTitle = element.getElementsByTagName("h4")[0];

        DeleteButton.addEventListener('click', function(){
            console.log('delete was pushed');

            apiActions.deleteRequest(CONSTANTS.TodoAPIURL, id, data => {
                CONSTANTS.Content.innerHTML = Process(data);
                AddEventListeners();
            });


            // fetch(CONSTANTS.TodoAPIURL + id, {
            //     method: "DELETE"
            // })
            // .then(response => response.json())
            // .then(data => {
            //     contentDiv.innerHTML = Process(data);
            //     AddEventListeners();
            // })
            // .catch(err => console.log(err));


        });

        TodoTitle.addEventListener('click', function(){
            

            Todo.GetTodo(id);

        });

    });

    CreateButton.addEventListener("click", function(){
        Todo.AddTodo();
    });

}