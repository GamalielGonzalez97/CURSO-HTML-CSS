let db = null;

// Inicializar la Base de Datos SQLite
async function initDB() {
  const SQL = await initSqlJs({
    locateFile: (file) =>
      `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${file}`,
  });

  // Intentar cargar datos previo guardados en localStorage
  const savedDb = localStorage.getItem("sqlite_todo_db");
  if (savedDb) {
    const uInt8Array = new Uint8Array(JSON.parse(savedDb));
    db = new SQL.Database(uInt8Array);
  } else {
    db = new SQL.Database();
  }

  // Crear la tabla "tasks" si no existe
  db.run(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      text TEXT NOT NULL,
      completed INTEGER DEFAULT 0
    );
  `);

  saveDBToStorage();
  loadTasksFromDB();
}

// Guardar los cambios de la BD en el almacenamiento local del navegador
function saveDBToStorage() {
  if (!db) return;
  const data = db.export();
  const array = Array.from(data);
  localStorage.setItem("sqlite_todo_db", JSON.stringify(array));
}

// Cargar las tareas desde la BD al cargar la página
function loadTasksFromDB() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  const res = db.exec("SELECT id, text, completed FROM tasks");
  if (res.length > 0) {
    const rows = res[0].values;
    rows.forEach((row) => {
      const [id, text, completed] = row;
      renderTaskUI(id, text, completed);
    });
  }
}

// Renderizar en HTML
function renderTaskUI(id, text, completed) {
  const li = document.createElement("li");
  li.textContent = text;
  li.dataset.id = id;

  if (completed) {
    li.classList.add("completed");
  }

  // Marcar o desmarcar como completada en la BD
  li.addEventListener("click", function () {
    const isCompleted = li.classList.toggle("completed") ? 1 : 0;
    db.run("UPDATE tasks SET completed = ? WHERE id = ?", [isCompleted, id]);
    saveDBToStorage();
  });

  // Botón para eliminar un registro individual
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function (e) {
    e.stopPropagation();
    // Eliminar registro de la BD
    db.run("DELETE FROM tasks WHERE id = ?", [id]);
    saveDBToStorage();
    li.remove();
  };

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);
}

// GUARDAR un nuevo registro
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  // Insertar en la BD en SQLite
  db.run("INSERT INTO tasks (text, completed) VALUES (?, 0)", [taskText]);

  // Obtener el ID del último registro insertado
  const res = db.exec("SELECT last_insert_rowid()");
  const lastId = res[0].values[0][0];

  saveDBToStorage();

  // Mostrar en la interfaz
  renderTaskUI(lastId, taskText, 0);

  input.value = "";
}

// BORRAR TODOS LOS REGISTROS
function clearAllTasks() {
  if (confirm("¿Seguro que deseas borrar todas las tareas?")) {
    db.run("DELETE FROM tasks");
    saveDBToStorage();
    document.getElementById("taskList").innerHTML = "";
  }
}

// Iniciar la base de datos al cargar la página
window.addEventListener("DOMContentLoaded", initDB);
