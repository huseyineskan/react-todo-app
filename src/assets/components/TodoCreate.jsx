import React, { useState } from "react";
import "../../css/todo.css";

function TodoCreate({ postTask }) {
  const [todo, setTodo] = useState("");
  return (
    <>
      <h1>Just do it!</h1>
      <div className="add-a-task-div">
        <input
          type="text"
          placeholder="Please add a task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          onClick={() => {
            postTask(todo);
            setTodo("");
          }}
        >
          Add Todo
        </button>
      </div>
    </>
  );
}

export default TodoCreate;
