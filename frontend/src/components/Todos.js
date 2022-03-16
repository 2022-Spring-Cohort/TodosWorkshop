const TODO_URL = "https://localhost:44329/todos";
const contentDiv = document.getElementById("content");

export default {
    GetTodos
}

function GetTodos(){
    fetch(TODO_URL)
    .then(response => response.json())
    .then(data => {
        contentDiv.innerHTML = Process(data);
    })
    .catch(err => console.log(err));
}

function Process(todos){
    return `
        <ul>
            ${todos.map(todo =>{
                return `
                    <li>${todo.title}</li>
                `;
            }).join('')}
        </ul>
    `;
}