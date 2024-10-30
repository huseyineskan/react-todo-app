import { useEffect, useState } from "react";
import "./App.css";
import TodoCreate from "./assets/components/TodoCreate";
import AllTodos from "./assets/components/AllTodos";
import axios from "axios";

function App() {
  const BASE_URL = "http://localhost:3000/tasks/";

  const [allTodos, setAllTodos] = useState(null);

  const getAllTasks = async () => {
    const response = await axios.get(BASE_URL);
    setAllTodos(response.data);
  };

  const postTask = async (newTodo) => {
    await axios.post(BASE_URL, { task: newTodo });
  };

  const deleteTask = async (id) => {
    await axios.delete(BASE_URL + id);
  };

  useEffect(() => {
    getAllTasks();
  }, [postTask]);

  return (
    <section className="container">
      <TodoCreate postTask={postTask} />
      <AllTodos allTodos={allTodos} deleteTask={deleteTask} />
    </section>
  );
}

export default App;
