import React, { useState } from "react";
import "../../css/todo.css";

function TodoCreate({ postTask }) {
  const [todo, setTodo] = useState("");
  return (
    <>
      <div className="add-a-task-div">
        <input
          type="text"
          placeholder="Please add a task"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              postTask(todo);
              setTodo("");
            }
          }}
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
