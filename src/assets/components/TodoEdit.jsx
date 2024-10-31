import React from "react";

function TodoEdit({
  updateTask,
  editTask,
  setEditTask,
  editBoxHide,
  setEditBoxHide,
}) {
  return (
    <div className={`todo-container ${editBoxHide ? "" : "show"}`}>
      <div className="todo-edit-box">
        <h2>Edit task</h2>
        <div className="todo-edit-div">
          <input
            type="text"
            placeholder="Please write new task"
            value={editTask.task || ""}
            onChange={(e) => {
              setEditTask((prev) => ({ ...prev, task: e.target.value }));
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                updateTask(editTask.id, editTask.task);
              }
            }}
          />
          <button
            onClick={() => {
              updateTask(editTask.id, editTask.task);
              setEditTask("");
            }}
          >
            Save
          </button>
        </div>
        <i
          className="fa-solid fa-close"
          onClick={() => setEditBoxHide(true)}
        ></i>
      </div>
    </div>
  );
}

export default TodoEdit;
