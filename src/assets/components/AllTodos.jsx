import React from "react";

function AllTodos({ allTodos, deleteTask }) {
  return (
    <div className="all-todos-div">
      <ul>
        {allTodos &&
          allTodos.map((todo, i) => (
            <li key={i}>
              <span>{todo.task}</span>
              <div onClick={() => deleteTask(todo.id)}>
                <i className="fa-solid fa-trash"></i>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default AllTodos;
