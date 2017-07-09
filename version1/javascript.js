// Store TODOs
todos = ['item1', 'item2', 'item3']

// Display TODOs
console.log("My TODOs:", todos);

// Add new TODO
todos.push("item4");
todos.push("item5");

// Change TODO
todos[0] = "item1 updated";

// Delete TODO
// splice(postion, quantity to remove)
todos.splice(0, 1); // Removes item1