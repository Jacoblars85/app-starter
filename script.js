function onReady() {
  console.log('Javascript still works! What a gosh darn relief.');
}

function handleSubmit(event) {
  //stop the form from taking over, refreshing
  event.preventDefault();

  console.log('work?');

  //go *get* imput stuff
  let todoText = document.getElementById('todo-text').value;
  let todoAuthor = document.getElementById('todo-author').value;

  //set value to empty string
  document.getElementById('todo-text').value = '';
  document.getElementById('todo-author').value = '';

  console.log(todoText, todoAuthor);

  let todoList = document.getElementById('todo-list');

  todoList.innerHTML += `
   <li> 
   <button onclick="deleteTodo(event)">❌</button>
  ${todoText} (${todoAuthor})
</li>
`
}

function deleteTodo(event) {
  console.log('trying to delete');
  event.target.parentElement.remove();
}


onReady();