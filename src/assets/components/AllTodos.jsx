import React from "react";

function AllTodos({ allTodos, deleteTask, openEdit }) {
  return (
    <div className="all-todos-div">
      <ul>
        {allTodos &&
          allTodos.map((todo, i) => (
            <li key={i}>
              <span>{todo.task}</span>
              <div>
                <i
                  onClick={() => deleteTask(todo.id)}
                  className="fa-solid fa-trash"
                ></i>
                <i
                  onClick={() => openEdit(todo.id, todo.task)}
                  className="fa-solid fa-edit"
                ></i>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default AllTodos;
