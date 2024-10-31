import { useEffect, useRef, useState } from "react";
import "./App.css";
import TodoCreate from "./assets/components/TodoCreate";
import AllTodos from "./assets/components/AllTodos";
import axios from "axios";
import TodoEdit from "./assets/components/TodoEdit";

function App() {
  const BASE_URL = "http://localhost:3000/tasks/";
  const [allTodos, setAllTodos] = useState(null);
  const [alert, setAlert] = useState(null);
  // const [alertShow, setAlertShow] = useState(false);
  const [editTask, setEditTask] = useState("");
  const [editBoxHide, setEditBoxHide] = useState(true);
  const timerRef = useRef(null);

  const getAllTasks = async () => {
    const response = await axios.get(BASE_URL);
    setAllTodos(response.data);
  };

  const postTask = async (newTodo) => {
    if (newTodo) {
      await axios.post(BASE_URL, { task: newTodo });
      showAlert("success show", "Task added");
    } else {
      showAlert("danger show", "Please give a task");
    }
  };

  const deleteTask = async (id) => {
    await axios.delete(BASE_URL + id);
    showAlert("success show", "Task deleted");
  };

  const openEdit = async (taskId, oldTask) => {
    setEditTask({ id: taskId, task: oldTask });
    setEditBoxHide(false);
  };

  const updateTask = async (id, newTask) => {
    await axios.put(BASE_URL + id, { task: newTask });
    setEditBoxHide(true);
    showAlert("warning show", "Task updated");
  };

  const showAlert = (a, m) => {
    setAlert({ alert: a, message: m });

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setAlert("");
    }, 5000);
  };

  useEffect(() => {
    getAllTasks();
  }, [postTask]);

  return (
    <section className="container">
      <p className={`alert ${alert ? alert.alert : ""}`}>
        {alert ? alert.message : ""}
      </p>
      <h1>Just do it!</h1>
      <TodoCreate postTask={postTask} />
      <AllTodos
        allTodos={allTodos}
        deleteTask={deleteTask}
        openEdit={openEdit}
      />
      <TodoEdit
        updateTask={updateTask}
        editTask={editTask}
        setEditTask={setEditTask}
        editBoxHide={editBoxHide}
        setEditBoxHide={setEditBoxHide}
      />
    </section>
  );
}

export default App;
