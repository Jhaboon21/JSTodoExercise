const form = document.querySelector('#todoform');
const todoInput = document.querySelector('input[name="name"');
const results = document.querySelector('#results');

// initialize localstoraged todos JSON.parse(localStorage.getItem("todoItem")) ||
const savedTodos = JSON.parse(localStorage.getItem("todoItem")) || [];
for (let i = 0; i < savedTodos.length; i++) {
    const newTodo = makeTodos((savedTodos[i]));
    results.append(newTodo);
}

// add todos from the submit form
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const newTodo = makeTodos((todoInput.value + ' '));
    results.append(newTodo);

    savedTodos.push(newTodo.innerText);// should? push the newly created todos into the localstorage
    localStorage.setItem('todoItem', JSON.stringify(savedTodos))
})

// used for the above event listener tp create the li and remove button
function makeTodos(text)
{
    const todoText = document.createElement('li');
    const removeButton = document.createElement('button');
    removeButton.innerText = "Remove Todo.";
    todoText.innerText = text;
    todoText.append(removeButton);
    return todoText;
}

// clicking on button will remove or clicking on text will toggle completed
results.addEventListener('click', function(e) {
    if(e.target.tagName === 'BUTTON')
    {
        e.target.parentElement.remove();
        localStorage.removeItem('todoItem');
    }
    else if (e.target.tagName === 'LI')
    {
        e.target.classList.toggle('completed');
    }

})