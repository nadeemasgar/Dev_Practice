let todoInput = document.querySelector(".todo-input");
let addTodoButton = document.querySelector(".add-todo");
let todosList = document.querySelector(".todos-list");
//events

function addTodo() {
    let todo = todoInput.value;
    
    // "", 0, false, undefined --> falsy value
    if(todo) {
        let li = document.createElement("li"); // It creates an element
        li.classList.add("todo-item"); // It adds class to a element 
        // <li class="todo-item"></li>

        let pTag = document.createElement("p");
        pTag.classList.add("todo");
        pTag.innerHTML = todo;
        // <p class="todo">Learn HTML !!!</p>


        let deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-task");
        deleteButton.innerHTML = "DELETE";
        // <button class="delete-task">DELETE</button>

        deleteButton.addEventListener("click", function(event) {
            console.log(event);
            event.target.parentNode.remove();
        });

        li.append(pTag);
        li.append(deleteButton);

        todosList.append(li);
        todoInput.value = "";
    }
    else {
        alert("You haven't entered any todo !!!");
    }
}

addTodoButton.addEventListener("click", function() {
    addTodo();
});


// key Pressed

todoInput.addEventListener("keypress", function(e) {
    if(e.key == "Enter") {
        addTodo();
    }
})