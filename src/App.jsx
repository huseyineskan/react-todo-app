import { useState } from "react";
import "./App.css";
import TodoCreate from "./assets/components/TodoCreate";
import AllTodos from "./assets/components/AllTodos";

function App() {
  return (
    <section className="container">
      <TodoCreate />
      <AllTodos />
    </section>
  );
}

export default App;
