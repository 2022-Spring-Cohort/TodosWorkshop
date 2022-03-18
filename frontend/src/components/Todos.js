import * as CONSTANTS from "../components/constants";
const contentDiv = document.getElementById("content");

export default {
    GetTodos
}

function GetTodos(){
    fetch(CONSTANTS.TodoAPIURL)
    .then(response => response.json())
    .then(data => {
        contentDiv.innerHTML = Process(data);
    })
    .catch(err => console.log(err));
}

function Process(todos){
    return `
        <ol>
            ${todos.map(todo =>{
                return `
                    <li>
                        ${todo.title}
                        <ul>
                            <li>Owner: ${todo.owner}</li>
                            <li>Description: ${todo.description}</li>
                        </ul>
                    </li>
                `;
            }).join('')}
        </ol>
    `;
}