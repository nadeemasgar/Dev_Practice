let todoInput = document.querySelector(".todo-input");
let addTodoButton = document.querySelector(".add-todo");
let todoList = document.querySelector(".todos-list");

function addTodo() {
    let todo = todoInput.value; 
    // "", 0, false, undefined
    if(todo) {
        
        let listItem = document.createElement("li");
        listItem.classList.add("todo-item");
        // <li class="todo-item"></li>

        let pTag = document.createElement("p");
        pTag.classList.add("todo");
        pTag.innerHTML = todo;
        // <p class="todo">Learn HTML !!!</p>

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-task");
        deleteButton.innerHTML = "DELETE";
        // <button class="delete-task">DELETE</button>

        // Add eventListner to delete Listner
        deleteButton.addEventListener("click", function(event) {
            event.target.parentElement.remove()
        });

        listItem.append(pTag); 
        listItem.append(deleteButton);

        todoList.append(listItem);

        todoInput.value = "";
    }
}

addTodoButton.addEventListener("click", function() {
    addTodo();
})

todoInput.addEventListener("keypress" , function(event) {
    if(event.key == "Enter") {
        addTodo();
    }
})


{/* <li class="todo-item">
    <p class="todo"></p>
    <button class="delete-task"></button>
</li>
 */}
