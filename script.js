function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    ${taskInput.value}
    <span class="delete" onclick="deleteTask(this)">❌</span>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
}

function deleteTask(element) {
  element.parentElement.remove();
}
