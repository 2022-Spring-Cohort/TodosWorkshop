import Todos from "./Todos";
import Owners from "./Owners";
import Vehicles from "./Vehicles";

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
            <li id='navOwner'>Owners</li>
            <li id='navVehicle'>Vehicles</li>
        </ul>
    `;
}

function SetupEventListeners(){

    let navHome = document.getElementById('navHome');
    let navTodo = document.getElementById('navTodo');
    let navOwner = document.getElementById('navOwner');
    let navVehicle = document.getElementById('navVehicle');

    navTodo.addEventListener('click', function(){
        Todos.GetTodos();
    });

    navHome.addEventListener('click', function(){
        contentDiv.innerHTML = '';
    });

    navOwner.addEventListener('click', function(){
        Owners.GetOwners();
    });

    navVehicle.addEventListener('click', function(){
        Vehicles.DisplayAll();
    });
}