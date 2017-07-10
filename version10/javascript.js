// Store TODOs
var todoList = {
    todos: [],
    // Add todos
    addTodo: function (todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    // Change Todos
    changeTodo: function (position, todoText) {
        console.log("Changing '", this.todos[position].todoText, "' to '", todoText, "'");
        this.todos[position].todoText = todoText;
    },
    // Delete Todos
    deleteTodo: function (position) {
        console.log("Removing:", this.todos[position]);
        this.todos.splice(position, 1);
    },
    // Toggle complete
    toggleCompleted: function (position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    toggleAll: function () {

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
    }
}

var handlers = {
    addTodo: function () {
        var addTodoTextInput = document.getElementById("addTodoTextInput")
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
    },
    changeTodo: function () {
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");

        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);

        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
        view.displayTodos();
    },
    deleteTodo: function (position) {
        todoList.deleteTodo(position);
        view.displayTodos();
    },
    toggleCompleted: function () {
        var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = '';
        view.displayTodos();
    },
    toggleAll: function () {
        todoList.toggleAll();
        view.displayTodos();
    }
}

var view = {
    displayTodos: function () {
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';
        for (var i = 0; i < todoList.todos.length; i++) {
            var todosLi = document.createElement('li');
            var todo = todoList.todos[i]
            var todoTextWithCompletionText = '';
            if (todo.completed === true) {
                todoTextWithCompletionText = '(X)' + todo.todoText
            } else {
                todoTextWithCompletionText = '( )' + todo.todoText
            }
            todosLi.id = i;
            todosLi.textContent = todoTextWithCompletionText;
            todosLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todosLi);
        }
    },
    createDeleteButton: function () {
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton'
        return deleteButton;
    },
    setupEventListeners: function () {
        var todosUl = document.querySelector('ul');

        todosUl.addEventListener('click', function (event) {
            console.log(event.target.parentNode.id);

            // Get element that was clicked on
            var elementClicked = event.target;

            // Check if elementClicked is a delete button
            if (elementClicked.className === 'deleteButton') {
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }
        })
    }
}

view.setupEventListeners();

var utilities = {
    runWithDebugger: function (ourFunction) {
        debugger;
        ourFunction();
    },
    callFunctionAfterMiliseconds: function (miliseconds, ourFunction) {
        return setTimeout(ourFunction, miliseconds);
    },

}