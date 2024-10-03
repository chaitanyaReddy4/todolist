
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    
    const taskText = taskInput.value.trim();

  
    if (taskText === "") {
        return;
    }

 
    const li = document.createElement('li');
    li.innerHTML = `${taskText} <button onclick="toggleTask(this)">Mark as Done</button>`;

    
    taskList.appendChild(li);

    
    taskInput.value = "";
}


function toggleTask(button) {
    const li = button.parentElement;
    
   
    li.classList.toggle('completed');

   
    if (li.classList.contains('completed')) {
        button.innerText = "Undo";
    } else {
        button.innerText = "Mark as Done";
    }
}
