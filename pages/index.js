import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Apprendre Next.js", completed: false },
    {
      id: 2,
      text: "Créer une application de liste de tâches",
      completed: false,
    },
    { id: 3, text: "Explorer Vercel pour le déploiement", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [isEditing, setIsEditing] = useState(null);
  const [editText, setEditText] = useState("");

  const toggleCompletion = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const addTask = () => {
    const id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id, text: newTask, completed: false }]);
      setNewTask("");
      setShowInput(false);
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const startEditing = (task) => {
    setIsEditing(task.id);
    setEditText(task.text);
  };

  const editTask = () => {
    setTasks(
      tasks.map((task) => {
        if (task.id === isEditing) {
          return { ...task, text: editText };
        }
        return task;
      })
    );
    setIsEditing(null);
    setEditText("");
  };

  return (
    <div className="adding-input">
      <h1>Ma Liste de Tâches</h1>
      <button onClick={() => setShowInput(true)}>Ajouter une tâche</button>
      {showInput && (
        <div>
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Ajouter une nouvelle tâche"
          />
          <button onClick={addTask}>Ajouter</button>
        </div>
      )}
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {isEditing === task.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={editTask}>Enregistrer</button>
              </>
            ) : (
              <>
                {task.text}
                <div className="btns-actions">
                  <button
                    onClick={() => toggleCompletion(task.id)}
                    className="btn-add"
                  >
                    {task.completed
                      ? "Marquer comme non complétée"
                      : "Marquer comme complétée"}
                  </button>
                  <button
                    onClick={() => startEditing(task)}
                    className="btn-edit"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="btn-delete"
                  >
                    Supprimer
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
