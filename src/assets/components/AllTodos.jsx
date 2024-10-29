import React from "react";

function AllTodos() {
  return (
    <div className="all-todos-div">
      <ul>
        <li>
          <span>Task 1</span>
          <div>
            <i class="fa-solid fa-trash"></i>
          </div>
        </li>
        <li>
          <span>Task 2</span>
          <div>
            <i class="fa-solid fa-trash"></i>
          </div>
        </li>
        <li>
          <span>Task 3</span>
          <div>
            <i class="fa-solid fa-trash"></i>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default AllTodos;
