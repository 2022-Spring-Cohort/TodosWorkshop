import Todos from "./Todos";

const contentDiv = document.getElementById("content");

export default {
    SetupNavBar,
    SetupEventListeners
}




function SetupNavBar(){
    return `
        <ul>
            <li id='navHome'>Home</li>
            <li id='navTodo'>Todo List</li>
        </ul>
    `;
}

function SetupEventListeners(){
    let navHome = document.getElementById('navHome');
    let navTodo = document.getElementById('navTodo');
    navTodo.addEventListener('click', function(){
        Todos.GetTodos();
    });
    navHome.addEventListener('click', function(){
        contentDiv.innerHTML = '';
    });
}