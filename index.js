const inputTodo= document.getElementById("newTodoInput");
const addTodoBtn= document.getElementById("addTodo");
const todoList= document.getElementById("todoList");

addTodoBtn.addEventListener("click", ()=> {
    const todoText= inputTodo.value;
    if(todoText!=="") {
        const newTodo=document.createElement("li");
        newTodo.innerText=todoText;

        const deleteBtn= document.createElement("button");
        deleteBtn.innerText="X";
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.addEventListener("click", function() {
            newTodo.remove();
        });
        newTodo.appendChild(deleteBtn);

        todoList.appendChild(newTodo);

        inputTodo.value="";
    }
});