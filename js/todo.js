function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return; // Evita agregar tareas vacías

  const li = document.createElement("li");
  li.textContent = taskText;

  // Al hacer clic en el texto de la tarea, se marca como completada
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Botón para eliminar la tarea
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function (e) {
    e.stopPropagation(); // Evita activar el evento de completar al borrar
    li.remove();
  };

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);

  input.value = ""; // Limpiar el campo de texto
}
