// Store TODOs
var todoList = {
    todos: ['item1', 'item2', 'item3'],
    // Display todos
    displayTodos: function() {
        console.log(this.todos);
    },
    // Add todos
    addTodo: function(todoText) {
        this.todos.push(todoText);
        this.displayTodos();
    },
    // Change Todos
    changeTodo: function(position, newValue) {
        console.log("Changing:", this.todos[position], "to:", newValue);
        this.todos[position] = newValue;
        this.displayTodos();
    },
    // Delete Todos
    deleteTodo: function(position) {
        console.log("Removing:", this.todos[position]);
        this.todos.splice(position, 1);
        this.displayTodos();
    }
}