// Store TODOs
var todoList = {
    todos: [],
    // Display todos
    displayTodos: function() {
        if (this.todos.length === 0) {
            console.log("Your todolist is empty!");
        } else {
            for (var i = 0; i < this.todos.length; i++) {
                var todo = this.todos[i]
                if (todo.completed === false) {
                    console.log("( )", todo.todoText);
                } else {
                    console.log("(X)", todo.todoText);
                }
            }
        }
    },
    // Add todos
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    // Change Todos
    changeTodo: function(position, todoText) {
        console.log("Changing:", this.todos[position].todoText, "to:", todoText);
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    // Delete Todos
    deleteTodo: function(position) {
        console.log("Removing:", this.todos[position]);
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completes;
        this.displayTodos();
    }
}