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
        console.log("Changing '", this.todos[position].todoText, "' to '", todoText, "'");
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    // Delete Todos
    deleteTodo: function(position) {
        console.log("Removing:", this.todos[position]);
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    // Toggle complete
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completes;
        this.displayTodos();
    },
    toggleAll: function() {

        var totalTodos = this.todos.length;
        var completedTodos = 0;
        // get number of completed todos
        for (var i = 0; i < totalTodos; i++) {
            var todo = this.todos[i]
            if (todo.completed) {
                completedTodos++;
            }
        }
        // Case 1: If all are complete, then make everything false
        if (completedTodos === totalTodos) {

            for (var i = 0; i < totalTodos; i++) {
                var todo = this.todos[i]
                todo.completed = false;
            }
        } else {
            // Case 2: Else, make them all true
            for (var i = 0; i < totalTodos; i++) {
                var todo = this.todos[i]
                todo.completed = true;
            }
        }
        this.displayTodos();
    }
}

var handlers = {
    displayTodos: function() {
        todoList.displayTodos();
    },
    addTodo: function() {
        var addTodoTextInput = document.getElementById("addTodoTextInput")
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");

        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);

        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
    },
    deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = '';
    },
    toggleCompleted: function() {
        var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = '';
    },
    toggleAll: function() {
        todoList.toggleAll();
    }
}