// Store TODOs
todos = ['item1', 'item2', 'item3']

// Display TODOs
function displayTodos() {
    console.log("My todos:", todos);
}

// Add new TODO
function addTodo(todoText) {
    todos.push(todoText);
    displayTodos();
}


// Change TODO
function changeTodo(position, newValue) {
    console.log("Changed:", todos[position], "to:", newValue)
    todos[position] = newValue;
}

// Delete TODO
// splice(postion, quantity to remove)
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}