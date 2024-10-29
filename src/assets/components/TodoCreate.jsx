import React from "react";
import "../../css/todo.css";

function TodoCreate() {
  return (
    <>
      <h1>Just do it!</h1>
      <div className="add-a-task-div">
        <input type="text" placeholder="Please add a task" />
        <button>Add Todo</button>
      </div>
    </>
  );
}

export default TodoCreate;
